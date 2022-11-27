// 함수형으로 만들어 외부에서 실행
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    // id가 기본적으로 들어있다.
    "Comment",
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      // belongsTo가 들어가면 아래처럼 칼럼이 생긴다.
      // UserId: {}
      // PostId: {}
    },
    {
      charser: "utf8mb4",
      collate: "utf8mb4_general_ci", // 이모티콘 저장
    }
  );
  Comment.associate = (db) => {
    // Comment는 db.xxxx에 속해있다.
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  };
  return Comment;
};
