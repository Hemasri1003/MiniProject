const generateMarksHash = require("../utils/hash");
const createBlock = require("../blockchain/block");

let blockchain = [];

function submitMarks(req, res) {

  const marksData = req.body;

  const hash = generateMarksHash(marksData);

  const previousHash =
    blockchain.length > 0
      ? blockchain[blockchain.length - 1].hash
      : "0";

  const block = createBlock(
    blockchain.length + 1,
    new Date().toISOString(),
    marksData,
    previousHash,
    hash
  );

  blockchain.push(block);

  res.json({
    message: "Marks stored successfully",
    block: block
  });
}

module.exports = { submitMarks };