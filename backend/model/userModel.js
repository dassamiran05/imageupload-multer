const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imgPath: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
});

const users = new mongoose.model("users", userSchema);
module.exports = users;
