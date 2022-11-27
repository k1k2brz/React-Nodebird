module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      content: {
        type: DataTypes.STRING(200), // 이미지는 url이라 길어질 수 있기 때문에 200자
        allowNull: false,
      },
    },
    {
      charser: "utf8",
      collate: "utf8_general_ci",
    }
  );
  Image.associate = (db) => {
    // 게시글1 이미지 다수 (일대 다 관계)
    db.Image.belongsTo(db.Post);
  };
  return Image;
};
