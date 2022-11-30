const express = require("express");
const bcrypt = require("bcrypt");
// db = 로 쓰면 db.User라고 써야하니까 구조분해 할당
const passport = require("passport");
const { Op } = require("sequelize");

const { User, Post, Image, Comment } = require("../models");
// const db = require("../models");
// 중복을 제거하기 위해 middlewares
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

const router = express.Router();

// 새로고침 할 때 마다 가는 요청
router.get("/", async (req, res, next) => {
  // GET /user
  // console.log(req.headers); // headers안에 쿠키 들어있음
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
    const followers = await user.getFollowers({
      // limit만큼 더 가져오게
      limit: parseInt(req.query.limit),
    });
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
    const followings = await user.getFollowings({
      limit: parseInt(req.query.limit),
    });
    res.status(200).json(followings);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 미들웨어는 위에서 밑으로 왼 -> 오른쪽으로
// 위의 follow찾다가 뜬금없이 파라미터에 걸려버려서 404에러 뜰 수 있기 때문에 어지간하면 파라미터는 밑에 쓰자.
router.get("/:userId", async (req, res, next) => {
  // GET /user/1
  try {
    const fullUserWidthoutPassword = await User.findOne({
      where: { id: req.params.userId },
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
    if (fullUserWidthoutPassword) {
      // sequelize에서 온 데이터를 쓸 수 있게 toJSON으로 바꿔줌
      const data = fullUserWidthoutPassword.toJSON();
      // id가 다 노출되는 위협 방지 (다 length로 바꿔버림)
      data.Posts = data.Posts.length;
      data.Followers = data.Followers.length;
      data.Followings = data.Followings.length;
      res.status(200).json(data);
    } else {
      res.status(404).json("존재하지 않는 사용자입니다.");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/:userId/posts", async (req, res, next) => {
  //GET /user/1/posts
  try {
    const where = { UserId: req.params.userId };
    // 쿼리 스트링이라 query.lastId에 들어있음
    // 초기 로딩이 아닐 때
    if (parseInt(req.query.lastId, 10)) {
      // Op.lt = lastId보다 작은 10개를 불러와라 (Op는 시퀄라이즈 내장)
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    } // 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
    const posts = await Post.findAll({
      // where이 게시글 가져오는 것에 대한 조건 (없으면 최신글 10개를 계속 보여준다.)
      where,
      // lastId는 고정되기 때문에 게시글 추가 삭제 할 때 문제가 생기지 않음
      //   where: { id: lastId },
      // limit: 10개만 가져오라는 명령어
      limit: 10,
      // (offset방식은 게시글 추가 삭제할 때 문제가 생김)
      //   offset: 100,
      // 최신글 맨 위
      order: [
        ["createdAt", "DESC"],
        [Comment, "createdAt", "DESC"],
      ],
      include: [
        {
          model: User,
          attributes: ["id", "nickname"],
        },
        {
          model: Image,
        },
        {
          model: Comment,
          // 댓글 안에 작성자만 찾기
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
              order: [["createdAt", "DESC"]],
            },
          ],
        },
        {
          model: User, // 좋아요 누른 사람
          as: "Likers",
          attributes: ["id"],
        },
        {
          model: Post, // 리트윗
          as: "Retweet",
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
            {
              model: Image,
            },
          ],
        },
      ],
    });
    res.status(200).json(posts);
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

module.exports = router;
