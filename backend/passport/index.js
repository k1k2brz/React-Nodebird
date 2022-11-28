const passport = require("passport");
const local = require("./local");
const { User } = require("../models");

module.exports = () => {
  // req.login의 user가 들어온다
  passport.serializeUser((user, done) => {
    // 유저 정보 중에서 쿠키와 묶어줄 id만 저장 (세션에서 다 들고있기 무겁기 때문)
    done(null, user.id);
  });

  // db에서 가져옴
  /** 라우터에 접근하게 되면 접근 전에 여기를 한번씩 실행해 저장해둔 id를 토대로
  사용자 정보를 복구해서 req.user로 만든다. */
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      done(null, user); // 정보를 복구해서 req.user안에 넣어준다
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  local();
};
