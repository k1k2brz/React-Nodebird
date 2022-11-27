const express = require("express");
const bcrypt = require("bcrypt");
// db = 로 쓰면 db.User라고 써야하니까 구조분해 할당
const passport = require("passport");

const { User } = require("../models");

const router = express.Router();

// saga의 data가 req.body로
// req, res, next를 사용하기 위해 미들웨어 확장
router.post("/login", (req, res, next) => {
  // local.js의 로그인 전략(코드)이 실행된다
  passport.authenticate("local", (err, user, info) => {
    // local done의 1,2,3번이 err, user, info에 전달
    if (err) {
      // 1번 서버에 에러가 있는 경우
      console.error(err);
      return next(err);
    }
    if (info) {
      //3번 클라이언트 에러
      return res.status(401).send(info.reason);
    }
    // 2번 성공
    return req.login(user, async (loginErr) => {
      // passport 로그인 에러
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      // 사용자 정보를 프론트로 넘겨준다.
      return res.json(user);
    });
  })(req, res, next);
});

router.post("/", async (req, res, next) => {
  // POST /user/
  //비동기 여부는 공식문서 보고 찾으면서 해결
  try {
    // front에서 보낸 이메일과 같은 이메일이 있는지
    const exUser = await User.findOne({
      // 찾을 땐 조건을 where 안에다 넣는다. (SQL생각)
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      // return 안붙이면 밑에꺼 까지 실행된다.
      return res.status(403).send("이미 사용중인 아이디입니다.");
    }
    // 숫자를 높일수록 보안 세지지만 암호화가 오래걸린다
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    // POST /user/
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    // CORS에러를 해결하기 위함
    // 3060에서 온 요청은 허용하겠다. but 보통 아래보단 middleware로 처리한다
    // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3060");

    // await 안붙이면 아래가 먼저 실행될지도
    res.status(201).send("ok"); // 200 생략해도 되지만 안하는걸 추천
  } catch (error) {
    console.error(error);
    // next를 통해서 에러를 보내면 에러들이 한방에 처리된다.
    next(error); // status 500
  }
});

module.exports = router;
