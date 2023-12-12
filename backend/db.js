const mongoose = require("mongoose");
const db = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shahid:shahid123@cluster0.0wbrvhy.mongodb.net"
    );
    console.log("db connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = db;
