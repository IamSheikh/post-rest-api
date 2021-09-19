const express = require("express");
const mongoose = require("mongoose");
const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/post-rest-api");
    console.log("database connected");
  } catch (e) {
    console.log(e);
  }
};

connectDB();

app.use("/api/post", require("./routes/post"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
