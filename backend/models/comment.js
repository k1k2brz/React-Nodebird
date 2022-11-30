// Class문법(최신화) 버전
const DataTypes = require("sequelize");
const { Model } = DataTypes;

// sequelize.define이 Model.init으로 바꼈다고 생각하면 됨
module.exports = class Comment extends Model {
  static init(sequelize) {
    return super.init(
      {
        //  id가 기본적으로 들어있다.
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        modelName: "Comment",
        tableName: "comments",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        // 연결 객체(hasMany같은거 적은거)가 여기 들어옴
        sequelize,
      }
    );
  }

  static associate(db) {
    // Comment는 db.xxxx에 속해있다.
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  }
};

// // 함수형으로 만들어 외부에서 실행
// module.exports = (sequelize, DataTypes) => {
//   const Comment = sequelize.define(
//     // id가 기본적으로 들어있다.
//     "Comment",
//     {
//       content: {
//         type: DataTypes.TEXT,
//         allowNull: false,
//       },
//       // belongsTo가 들어가면 아래처럼 칼럼이 생긴다.
//       // UserId: {}
//       // PostId: {}
//     },
//     {
//       charser: "utf8mb4",
//       collate: "utf8mb4_general_ci", // 이모티콘 저장
//     }
//   );
//   Comment.associate = (db) => {
//     // Comment는 db.xxxx에 속해있다.
//     db.Comment.belongsTo(db.User);
//     db.Comment.belongsTo(db.Post);
//   };
//   return Comment;
// };
