const express = require("express");
const post = require("./../models/post");
const router = express.Router();

router.post("/new", async (req, res) => {
  try {
    const { username, title, description } = req.body;
    const newPost = new post({
      username: username,
      title: title,
      description: description,
    });
    const posts = await newPost.save();
    res.json(posts);
  } catch (err) {
    console.log(err);
  }
});

router.get("/search/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const findedPost = await post.findById({ _id: id });
    res.json(findedPost);
  } catch (err) {
    console.log(err);
  }
});

router.get("/all", async (req, res) => {
  try {
    const allPost = await post.find();
    res.json(allPost);
  } catch (err) {
    console.log(err);
  }
});

router.put("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedPostData = {
      title,
      description,
    };
    const editPost = await post.findByIdAndUpdate(id, updatedPostData);
    res.json(editPost);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletePost = await post.findByIdAndDelete(id);
    res.json(deletePost);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
