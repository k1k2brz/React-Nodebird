const express = require("express");
const bcrypt = require("bcrypt");
// db = 로 쓰면 db.User라고 써야하니까 구조분해 할당
const passport = require("passport");

const { User, Post } = require("../models");
// const db = require("../models");
// 중복을 제거하기 위해 middlewares
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

const router = express.Router();

// 새로고침 할 때 마다 가는 요청
router.get("/", async (req, res, next) => {
  // GET /user
  try {
    // 사용자가 있다면
    if (req.user) {
      console.log(req.user);
      const fullUserWidthoutPassword = await User.findOne({
        where: { id: req.user.id },
        // attributes 특정 데이터 가져오기
        attributes: {
          // password만 빼고 받기
          exclude: ["password"],
        },
        // models폴더 db.xxxx안에 associate에 있는 것들
        // sequelize가 합쳐준다
        include: [
          {
            // hasMany라서 model: Post가 복수형이 되어 me.Posts가 됨
            model: Post,
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followings",
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followers",
            attributes: ["id"],
          },
        ],
      });
      res.status(200).json(fullUserWidthoutPassword);
    } else {
      // 사용자가 없다면
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// saga의 data가 req.body로
// req, res, next를 사용하기 위해 미들웨어 확장, 로그인 안한 사람만 접근
router.post("/login", isNotLoggedIn, (req, res, next) => {
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
      // 모든 정보를 다 집어넣은 유저
      const fullUserWidthoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          // 원하는 정보만 받기
          // ['id', 'nickname', 'email'],
          // password만 빼고 받기
          exclude: ["password"],
        },
        // models폴더 db.xxxx안에 associate에 있는 것들
        // sequelize가 합쳐준다
        include: [
          {
            model: Post,
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followings",
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followers",
            attributes: ["id"],
          },
        ],
      });
      // 사용자 정보를 프론트로 넘겨준다.
      // res.setHeader('Cookie', 'cxlhy'(랜덤 문자열)) 같은걸 보내줌 (세션과 연결)
      return res.status(200).json(fullUserWidthoutPassword);
    });
  })(req, res, next);
});

router.post("/", isNotLoggedIn, async (req, res, next) => {
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

// 로그인 한 다음부터는 req.user에 정보가 들어있음
router.post("/logout", isLoggedIn, (req, res) => {
  req.logout(() => {
    req.session.destroy();
    res.send("ok");
  });
  // 세션에 저장된 쿠키, 아이디 등 없애버림
});

router.patch("/nickname", isLoggedIn, async (req, res, next) => {
  try {
    await User.update(
      {
        nickname: req.body.nickname,
      },
      {
        where: { id: req.user.id },
      }
    );
    res.status(200).json({ nickname: req.body.nickname });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 팔로우
router.patch("/:userId/follow", isLoggedIn, async (req, res, next) => {
  // PATCH /user/1/follow
  try {
    // 유저 찾기
    const user = await User.findOne({
      where: { id: req.params.userId },
    });
    if (!user) {
      res.status(403).send("존재하지 않는 유저입니다.");
    }
    await user.addFollowers(req.user.id);
    // action.data가 되는 부분
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 언팔
router.delete("/:userId/follow", isLoggedIn, async (req, res, next) => {
  // DELETE /user/1/follow
  try {
    // 유저 찾기
    const user = await User.findOne({
      where: { id: req.params.userId },
    });
    if (!user) {
      res.status(403).send("존재하지 않는 유저입니다.");
    }
    await user.removeFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 팔로워 제거
router.delete("/follower/:userId", isLoggedIn, async (req, res, next) => {
  // DELETE /user/follower/2
  try {
    // 유저 찾기
    const user = await User.findOne({
      where: { id: req.params.userId },
    });
    if (!user) {
      res.status(403).send("존재하지 않는 유저는 차단 할 수 없습니다.");
    }
    await user.removeFollowings(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 팔로워 찾기
router.get("/followers", isLoggedIn, async (req, res, next) => {
  // GET /user/follower
  try {
    // 유저 찾기
    const user = await User.findOne({
      where: { id: req.user.id },
    });
    if (!user) {
      res.status(403).send("존재하지 않는 유저입니다.");
    }
    const followers = await user.getFollowers();
    res.status(200).json(followers);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/followings", isLoggedIn, async (req, res, next) => {
  // GET /user/follower
  try {
    // 유저 찾기
    const user = await User.findOne({ where: { id: req.user.id } });
    if (!user) {
      res.status(403).send("존재하지 않는 유저입니다.");
    }
    const followings = await user.getFollowings();
    res.status(200).json(followings);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
