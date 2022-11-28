const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development"; // 기본값 개발용
const config = require(__dirname + "/../config/config")[env]; // config를 가져옴
// 합쳐서 config의 development를 가져옴
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Comment = require("./comment")(sequelize, Sequelize);
db.Hashtag = require("./hashtag")(sequelize, Sequelize);
db.Image = require("./image")(sequelize, Sequelize);
db.Post = require("./post")(sequelize, Sequelize);
db.User = require("./user")(sequelize, Sequelize);

// db로 반복문을 돌기 때문에 다른 models에 db.으로 코딩한 것
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db를 외부에서 접근 가능하게
module.exports = db;
