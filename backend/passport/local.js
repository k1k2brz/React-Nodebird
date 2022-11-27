const passport = require("passport");
// 구조분해시 이름 바꾸는 방법
const { Strategy: LocalStrategy } = require("passport-local");
const bcrypt = require("bcrypt");
const { User } = require("../models");

module.exports = () => {
  // 사용법 정해져있음
  passport.use(
    new LocalStrategy(
      {
        // req.body.xxx 에 따라서 ''이름 적어주면 됨
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({
            where: { email },
          });
          if (!user) {
            // 1번째 자리: 서버 에러
            // 2번째 자리: 성공
            // 3번째 자리: 클라이언트 에러(보내는 쪽 에러)
            return done(null, false, { reason: "존재하지 않는 사용자입니다!" });
          }
          // 내가 입력한 password와 db에 저장된 password를 불러온다.
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            return done(null, user);
          }
          return done(null, false, { reason: "비밀번호가 틀렸습니다." });
        } catch (error) {
          console.error(error);
          return done(error);
        }
      }
    )
  );
};
