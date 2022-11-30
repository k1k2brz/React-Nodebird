const express = require("express");
const { Hashtag, Post, Image, Comment, User } = require("../models");
const router = express.Router();
const { Op } = require("sequelize");

router.get("/:hashtag", async (req, res, next) => {
  //GET /hashtag/노드
  try {
    const where = {};
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
      order: [["createdAt", "DESC"]],
      include: [
        {
          // 테이블이 따로 있으니까
          model: Hashtag,
          // 위의 where와 여기 적힌 where 동시에 만족하는 조건만 선택된다.
          // decodeURIComponent로 주소창 한글 변환한거 되돌리기
          where: { name: decodeURIComponent(req.params.hashtag) },
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

module.exports = router;
