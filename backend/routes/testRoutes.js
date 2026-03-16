const express = require("express");
const router = express.Router();

const Student = require("../models/Student");

router.get("/test", (req, res) => {
  res.json({ message: "Backend working" });
});

router.get("/add-test-student", async (req, res) => {
  try {

    const student = new Student({
      name: "Test Student",
      rollNumber: "12345",
      collegeCode: "COL001"
    });

    await student.save();

    res.json({
      message: "Student saved successfully",
      student
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;