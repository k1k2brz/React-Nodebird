// 노드는 서버가 아니라 자바스크립트 구동언어
const express = require("express");
const cors = require("cors");
const session = require("express-session");
// 브라우저처럼 해킹에 취약한 곳에는 랜덤한 문자열을 넣어준다.
// 참고: 도메인이 다르면 쿠키도 전달이 안된다. (요청을 누가 보냈는지 모름) -> cors에서 credentials true해줄것
const cookieParser = require("cookie-parser");
const passport = require("passport");
const dotenv = require("dotenv");
const morgan = require("morgan");

const postRouter = require("./routes/post");
const postsRouter = require("./routes/posts");
const userRouter = require("./routes/user");
const db = require("./models");
const passportConfig = require("./passport");

dotenv.config();
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

// 프론트에서 백엔드로 요청 보낼 때 어떤 요청들을 보냈는지 기록 됨
app.use(morgan("dev"));

// cors에러 해결
app.use(
  cors({
    // https://localhost:3060에서 온 요청만 허용
    origin: "http://localhost:3060",
    // origin: "*", // 모두 허용 (withCredentials: true일 땐 사용 불가) origin: true로 바꿔도 됨
    // 쿠키를 같이 전달 해준다 (도메인이 다르면 쿠키도 전달이 안되니까 cors로 허용)
    credentials: true,
  })
);
app.use(express.json()); // middleware
// req.body가 들어있는 상태 (순서 중요)
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    // secret키로 복원이 가능하기 때문에 숨겨야한다.
    // .env 설치 후 거기에서 관리
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// url과 method
// 주소창에 치는건 get
app.get("/", (req, res) => {
  res.send("Hello express");
});

// 프리픽스
// API는 다른 서비스가 내 서비스의 기능을 실행할 수 있게 열어둔 창구
app.use("/posts", postsRouter);
app.use("/post", postRouter);
app.use("/user", userRouter);

// 에러처리 미들웨어 들어가는 부분
// app.use((err, req, res, next) => {

// })

app.listen(3065, () => {
  console.log("서버 실행중");
});
