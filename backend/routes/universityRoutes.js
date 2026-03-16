const express = require("express");
const router = express.Router();

const universityController = require("../controllers/universityController");

router.get("/submissions", universityController.getSubmissions);
router.get("/marks/:collegeCode", universityController.getMarks);
router.post("/verify", universityController.verifyMarks);

module.exports = router;