const Student = require("../models/Student");
const Marks = require("../models/Marks");
const Submission = require("../models/Submission");

exports.addStudent = async (req, res) => {

  const student = new Student(req.body);

  await student.save();

  res.json({ message: "Student added", student });

};

exports.getStudents = async (req, res) => {

  const students = await Student.find({
    collegeCode: req.params.collegeCode
  });

  res.json(students);

};

exports.addMarks = async (req, res) => {

  const marks = new Marks(req.body);

  await marks.save();

  res.json({ message: "Marks saved", marks });

};

exports.submitMarks = async (req, res) => {

  const submission = new Submission({
    collegeCode: req.body.collegeCode
  });

  await submission.save();

  res.json({ message: "Marks submitted to university" });

};