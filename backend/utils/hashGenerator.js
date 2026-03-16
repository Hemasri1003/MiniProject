const crypto = require("crypto");

function generateMarksHash(index, timestamp, data, previousHash) {

  const blockString = index + timestamp + JSON.stringify(data) + previousHash;

  return crypto
    .createHash("sha256")
    .update(blockString)
    .digest("hex");
}

module.exports = generateMarksHash;