// post여러개 부를 때
const express = require("express");

const { Post, User, Image, Comment } = require("../models");

const router = express.Router();

router.get("/", async (req, res, next) => {
  //GET /posts
  try {
    const posts = await Post.findAll({
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
            },
          ],
        },
        {
          model: User, // 좋아요 누른 사람
          as: "Likers",
          attributes: ["id"],
        },
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
      ],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
