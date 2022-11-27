// 노드는 서버가 아니라 자바스크립트 구동언어
const express = require("express");
const cors = require("cors");

const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const db = require("./models");
const passportConfig = require("./passport");

const app = express();

// DB - 시퀄라이즈 연결
// npx sequelize db:create
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);
passportConfig();

// cors에러 해결
app.use(
  cors({
    // https://nodebird.com에서 온 요청만 허용
    // origin: "https://nodebird.com",
    origin: "*", // 모두 허용
    credentials: false,
  })
);
app.use(express.json()); // middleware
app.use(express.urlencoded({ extended: true }));
// req.body가 들어있는 상태 (순서 중요)

// url과 method
app.get("/", (req, res) => {
  res.send("Hello express");
});

// 주소창에 치는건 get
app.get("/api", (req, res) => {
  res.send("Hello api");
});

app.get("/api/posts", (req, res) => {
  res.json([
    { id: 1, content: "hello" },
    { id: 2, content: "hello2" },
    { id: 3, content: "hello3" },
  ]);
});

app.use("/post", postRouter); // 프리픽스
app.use("/user", userRouter); // 프리픽스

app.listen(3065, () => {
  console.log("서버 실행중");
});
