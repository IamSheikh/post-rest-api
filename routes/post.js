const express = require("express");
const post = require("./../models/post");
const router = express.Router();

router.post("/new", async (req, res) => {
  const { username, title, description } = req.body;
  const newPost = new post({
    username: username,
    title: title,
    description: description,
  });
  const posts = await newPost.save();
  res.json(posts);
});

router.get("/search/:id", async (req, res) => {
  const { id } = req.params;
  const findedPost = await post.findById({ _id: id });
  res.json(findedPost);
});

module.exports = router;
