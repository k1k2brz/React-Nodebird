const express = require("express");
// 파일 이미지 등 멀티파트를 처리 multer
const multer = require("multer");
const path = require("path");
// 파일 만들기
const fs = require("fs");

const { Post, Image, Comment, User, Hashtag } = require("../models");
const { isLoggedIn } = require("./middlewares");

const router = express.Router();

try {
  fs.accessSync("uploads");
} catch (error) {
  console.log("uploads 폴더가 없으므로 생성합니다.");
  fs.mkdirSync("uploads");
}

// 라우터마다 받는게 다르기 때문에 multer는 개별적용하며 별도의 세팅이 필요하다
const upload = multer({
  // 일단 diskStorage에 저장했다가 AWS배포시 바꾼다.
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads");
    },
    filename(req, file, done) {
      // 제로초.png
      // 파일 이름 중복시 덮어씌어지는 문제 방지 (파일 올린 시간까지 나오게)
      const ext = path.extname(file.originalname); // 확장자 추출(.png)
      const basename = path.basename(file.originalname, ext); // 사용자
      done(null, basename + "_" + new Date().getTime() + ext); // 사용자14512512.png
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
});

// app에서 /post 주소 써줄 것
// passport에서 deserializeUser해줬기 때문에 req.user 접근 가능
router.post("/", isLoggedIn, upload.none(), async (req, res, next) => {
  // POST / post
  try {
    const hashtags = req.body.content.match(/#[^\s#]+/g);
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    if (hashtags) {
      const result = await Promise.all(
        hashtags.map((tag) =>
          // ex) 해쉬태그에 누가 #노드 를 등록 해놨으면 가져오고 없으면 등록
          Hashtag.findOrCreate({
            where: { name: tag.slice(1).toLowerCase() },
          })
        )
      ); // findOrCreate사용시 출력 이렇게 됨 [[노드, true], [리액트, true]]
      // 첫번째꺼 추출
      await post.addHashtags(result.map((v) => v[0]));
    }
    if (req.body.image) {
      // 이미지를 여러 개 올린 경우 image: [주사위,png, 농구.png] 배열로나옴
      if (Array.isArray(req.body.image)) {
        // Promise.all로 업로드 폴더에 전부 보냄 / db에는 파일 주소가(주소만) 보내진다.
        // 파일을 db에 보내면 느리고 캐싱도 못하기 때문
        const images = await Promise.all(req.body.image.map((image) => Image.create({ src: image })));
        console.log(images);
        await post.addImages(images);
        // 이미지를 하나만 올린 경우 image: 주사위.png
      } else {
        const image = await Image.create({ src: req.body.image });
        await post.addImages(image);
      }
    }
    // 돌려주길 원하는 Post정보
    // Image 안들어있을 때 에러나는거 해결
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User, // 댓글 작성자
              attributes: ["id", "nickname"],
            },
          ],
        },
        {
          model: User, // 게시글 작성자
          attributes: ["id", "nickname"],
        },
        {
          model: User, // 좋아요 누른사람
          // 위랑 구분하기 위해 as Likers가져옴
          as: "Likers",
          attributes: ["id"],
        },
      ],
    });
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// PostForm의 input image올린게 전달 됨
// 1장만 올릴거면 array('image')를 single('image')로 텍스트만 있다면 none(), 파일 2개 이상이면 fills
// upload.array('image')는 postForm의 FormData append값과 일치해야함
router.post("/images", isLoggedIn, upload.array("image"), (req, res, next) => {
  // POST /post/images
  console.log(req.files);
  res.json(req.files.map((v) => v.filename));
});

router.post("/:postId/retweet", isLoggedIn, async (req, res, next) => {
  // POST /post/1/retweet
  try {
    // 없는 글에 댓글 쓰거나 이상한 글에 접근해서 삭제 하는 것 등 방지 postId확인
    const post = await Post.findOne({
      where: { id: req.params.postId },
      include: [
        {
          model: Post,
          as: "Retweet",
        },
      ],
    });
    if (!post) {
      return res.status(403).send("존재하지 않는 게시글입니다.");
    }
    if (req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)) {
      return res.status(403).send("자신의 글은 리트윗할 수 없습니다.");
    }
    // 리트윗한 게시글인지
    const retweetTargetId = post.RetweetId || post.id;
    const exPost = await Post.findOne({
      where: {
        UserId: req.user.id,
        RetweetId: retweetTargetId,
      },
    });
    if (exPost) {
      return res.status(403).send("이미 리트윗한 게시글입니다.");
    }
    const retweet = await Post.create({
      UserId: req.user.id,
      RetweetId: retweetTargetId,
      // allowNull: false 해놔서 컨텐트에 값 넣어야 하기 때문에 임시로 넣어둠
      content: "retweet",
    });
    // 내가 어떤 게시글을 리트윗 했는지
    const retweetWithPrevPost = await Post.findOne({
      where: { id: retweet.id },
      // 나중에 include가 더 복잡해지면 느려질 가능성이 있어서 따로 분리해야 할 수 있음
      include: [
        {
          model: Post,
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
        {
          model: User,
          attributes: ["id", "nickname"],
        },
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
          ],
        },
      ],
    });
    res.status(201).json(retweetWithPrevPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// /1/comment이런식으로 들어가기 때문에 params로 받아준다
router.post("/:postId/comment", isLoggedIn, async (req, res, next) => {
  // POST / post/comment
  try {
    // 없는 글에 댓글 쓰거나 이상한 글에 접근해서 삭제 하는 것 등 방지 postId확인
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send("존재하지 않는 게시글입니다.");
    }
    const comment = await Comment.create({
      content: req.body.content,
      // :postId에 들어감 (문자열로)
      PostId: parseInt(req.params.postId, 10),
      UserId: req.user.id,
    });
    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [
        {
          model: User,
          attributes: ["id", "nickname"],
        },
      ],
    });
    res.status(201).json(fullComment);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch("/:postId/like", isLoggedIn, async (req, res, next) => {
  // PATCH /post/1/like
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(403).send("게시글이 존재하지 않습니다.");
    }
    // 게시글 존재   sequelize제공 addLikers(model주석 참조)
    await post.addLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/:postId/like", isLoggedIn, async (req, res, next) => {
  // DELETE /post/1/like
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(403).send("게시글이 존재하지 않습니다.");
    }
    // sequelize 기본제공 removeLikers (원래는 sql로 다 작성해야함)
    await post.removeLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/:postId", isLoggedIn, async (req, res, next) => {
  // DELETE / post/10
  try {
    // sequelize의 제거 명령어
    await Post.destroy({
      // UserId까지 확인해서 본인확인 철저히
      where: { id: req.params.postId, UserId: req.user.id },
    });
    // params는 문자열
    res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
