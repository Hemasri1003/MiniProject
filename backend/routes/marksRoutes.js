const express = require("express");
const router = express.Router();

const {
  submitMarks,
  getBlocks,
  validateBlockchain
} = require("../controllers/marksController");

router.post("/submitMarks", submitMarks);

router.get("/blocks", getBlocks);

router.get("/validate", validateBlockchain);

module.exports = router;