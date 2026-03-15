const express = require("express");
const router = express.Router();

const { submitMarks } = require("../controllers/marksController");

router.get("/submitMarks", (req, res) => {
  res.send("GET route working");
});

router.post("/submitMarks", submitMarks);

module.exports = router;