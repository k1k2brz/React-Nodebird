module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charser: "utf8mb4", // 이모티콘 사용하려면 mb4 넣어야함
      collate: "utf8mb4_general_ci", // 이모티콘 저장
    }
  );
  Post.associate = (db) => {
    // 게시글은 어떤 작성자에게 속해있다.
    db.Post.belongsTo(db.User);
    // 다대 다 관계일 경우 belongsToMany
    db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" });
    // 하나의 게시글에 댓글 여러개
    db.Post.hasMany(db.Comment);
    // 이미지는 소유자가 정해져 있으므로 (소유한 게시글)
    db.Post.hasMany(db.Image);
    // Like로 이름 정하기 / 헷갈리지 않게 as로 구별 post에 좋아요를 누른 사람들
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" });
    // 리트윗
    db.Post.belongsTo(db.Post, { as: "Retweet" });
  };
  return Post;
};
