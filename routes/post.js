const express = require("express");
const router = express.Router();

router.get("/new", (req, res) => {
  res.send("New Post Page");
});

module.exports = router;