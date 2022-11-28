exports.isLoggedIn = (req, res, next) => {
  // 로그인 했는지
  if (req.isAuthenticated()) {
    // next()안에 뭘 넣으면 에러처리 안넣으면 다음 미들웨어로
    next();
  } else {
    res.status(401).send("로그인이 필요합니다.");
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send("로그인하지 않은 사용자만 접근 가능합니다.");
  }
};
