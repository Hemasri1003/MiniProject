const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  collegeCode: String,
  status: {
    type: String,
    default: "pending"
  }
});

module.exports = mongoose.model("Submission", submissionSchema);