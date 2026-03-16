const Submission = require("../models/Submission");
const Marks = require("../models/Marks");

exports.getSubmissions = async (req, res) => {

  const submissions = await Submission.find();

  res.json(submissions);

};

exports.getMarks = async (req, res) => {

  const marks = await Marks.find({
    collegeCode: req.params.collegeCode
  });

  res.json(marks);

};

exports.verifyMarks = async (req, res) => {

  const { collegeCode } = req.body;

  await Marks.updateMany(
    { collegeCode },
    { verified: true }
  );

  res.json({ message: "Marks verified" });

};