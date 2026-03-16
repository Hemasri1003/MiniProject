const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  rollNumber: String,
  collegeCode: String
});

module.exports = mongoose.model("Student", studentSchema);