const crypto = require("crypto");

exports.enterMarks = (req, res) => {
  try {
    const { studentId, subject, marks } = req.body;

    const dataString = studentId + subject + marks;

    const hash = crypto
      .createHash("sha256")
      .update(dataString)
      .digest("hex");

    res.json({
      message: "Marks stored",
      studentId,
      subject,
      marks,
      hash
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};