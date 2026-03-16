const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
  collegeCode: {
    type: String,
    required: true,
    unique: true
  },
  collegeName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "college"
  },
  status: {
    type: String,
    default: "pending"
  }
}, { timestamps: true });

module.exports = mongoose.model("College", collegeSchema);