const express = require("express");

const { Post, Image, Comment, User } = require("../models");
const user = require("../models/user");
const { isLoggedIn } = require("./middlewares");

const router = express.Router();

// app에서 /post 주소 써줄 것
// passport에서 deserializeUser해줬기 때문에 req.user 접근 가능
router.post("/", isLoggedIn, async (req, res, next) => {
  // POST / post
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
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
