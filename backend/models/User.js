const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String, // college or university
  collegeCode: String
});

module.exports = mongoose.model("User", userSchema);