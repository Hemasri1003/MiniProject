const mongoose = require("mongoose");

const marksSchema = new mongoose.Schema({
  studentId: String,
  subject: String,
  marks: Number,
  collegeCode: String,
  verified: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Marks", marksSchema);