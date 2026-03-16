const express = require("express");
const router = express.Router();

const collegeController = require("../controllers/collegeController");

router.post("/add-student", collegeController.addStudent);
router.get("/students/:collegeCode", collegeController.getStudents);
router.post("/add-marks", collegeController.addMarks);
router.post("/submit-marks", collegeController.submitMarks);

module.exports = router;