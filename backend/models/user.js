const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        // id가 기본적으로 들어있다.
        email: {
          type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
          allowNull: false, // 필수
          unique: true, // 고유한 값
        },
        nickname: {
          type: DataTypes.STRING(30),
          allowNull: false, // 필수
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false, // 필수
        },
      },
      {
        modelName: "User",
        tableName: "users",
        charset: "utf8",
        collate: "utf8_general_ci", // 한글 저장
        sequelize,
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: "Like", as: "Liked" });
    db.User.belongsToMany(db.User, { through: "Follow", as: "Followers", foreignKey: "FollowingId" });
    db.User.belongsToMany(db.User, { through: "Follow", as: "Followings", foreignKey: "FollowerId" });
  }
};

// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define(
//     "User",
//     {
//       // MySQL에는 users 테이블 생성
//       // id가 기본적으로 들어있다. (MySQL 자동생성)
//       // 시퀄라이즈는 SQL 칼럼 설정 여기서 함
//       email: {
//         type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
//         allowNull: false, // 필수
//         unique: true, // 고유한 값
//       },
//       nickname: {
//         type: DataTypes.STRING(30),
//         allowNull: false, // 필수
//       },
//       password: {
//         type: DataTypes.STRING(100), // 비밀번호는 암호화 하면 길이가 늘어나기 때문에 넉넉하게 늘려둠
//         allowNull: false, // 필수
//       },
//     },
//     {
//       charser: "utf8",
//       collate: "utf8_general_ci", // 한글 저장
//     }
//   );
//   User.associate = (db) => {
//     // 사람이 post를 여러개 가질 수 있다.
//     db.User.hasMany(db.Post);
//     db.User.hasMany(db.Comment);
//     // 사용자와 게시글의 좋아요 관계
//     // 중간 테이블 이름 정해줄 수 있다. (반대에서도 해줘야함) / through테이블이름 as별칭
//     db.User.belongsToMany(db.Post, { through: "Like", as: "Liked" });
//     // 같은 테이블 내에서 UserId의 이름을 받기 때문에 foreignKey로 구별 해준다.
//     db.User.belongsToMany(db.User, { through: "Follow", as: "Followers", foreignKey: "FollowingId" });
//     db.User.belongsToMany(db.User, { through: "Follow", as: "Followings", foreignKey: "FollowerId" });
//   };
//   return User;
// };
