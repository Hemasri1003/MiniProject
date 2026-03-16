const express = require("express");
const router = express.Router();

const {
  enterMarks
} = require("../controllers/marksController");

router.post("/marks", enterMarks);

module.exports = router;