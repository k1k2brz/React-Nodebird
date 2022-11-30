const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Image extends Model {
  static init(sequelize) {
    return super.init(
      {
        // id가 기본적으로 들어있다.
        src: {
          type: DataTypes.STRING(200), // 이미지 변환 소스가 길어질 수 있으므로
          allowNull: false,
        },
      },
      {
        modelName: "Image",
        tableName: "images",
        charset: "utf8",
        collate: "utf8_general_ci",
        sequelize,
      }
    );
  }
  static associate(db) {
    // 게시글 1 이미지 다수 (다대 다)
    db.Image.belongsTo(db.Post);
  }
};
