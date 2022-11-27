const express = require("express");

const router = express.Router();

// app에서 /post 주소 써줄 것
router.post("/", (req, res) => {
  // POST / post
  res.json({ id: 1, content: "hello" });
});

router.delete("/", (req, res) => {
  // DELETE / post
  res.json({ id: 1 });
});

module.exports = router;
