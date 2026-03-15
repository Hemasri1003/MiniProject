const generateMarksHash = require("../utils/hash");
const createBlock = require("../blockchain/block");

let blockchain = [];

// GENESIS BLOCK
const genesisTimestamp = new Date().toISOString();

const genesisBlock = createBlock(
  1,
  genesisTimestamp,
  { message: "Genesis Block" },
  "0",
  generateMarksHash({
    index: 1,
    timestamp: genesisTimestamp,
    data: { message: "Genesis Block" },
    previousHash: "0"
  })
);

blockchain.push(genesisBlock);


// SUBMIT MARKS API
function submitMarks(req, res) {

  const marksData = req.body;

  const index = blockchain.length + 1;
  const timestamp = new Date().toISOString();
  const previousHash = blockchain[blockchain.length - 1].hash;

  const blockData = {
    index: index,
    timestamp: timestamp,
    data: marksData,
    previousHash: previousHash
  };

  const hash = generateMarksHash(blockData);

  const block = createBlock(
    index,
    timestamp,
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


function getBlocks(req, res) {

  const isValid = validateChain();

  const formattedBlocks = blockchain.map(block => ({
    blockId: `BLOCK-${block.index}`,
    blockIndex: block.index,
    timestamp: block.timestamp,
    readableTime: new Date(block.timestamp).toLocaleString(),
    previousHash: block.previousHash,
    hash: block.hash,
    dataSize: JSON.stringify(block.data).length + " bytes",
    marksData: block.data
  }));

  res.json({
    blockchainStatus: isValid ? "VALID" : "TAMPERED",
    totalBlocks: blockchain.length,
    blocks: formattedBlocks
  });

}


// BLOCKCHAIN VALIDATION LOGIC
function validateChain() {

  for (let i = 1; i < blockchain.length; i++) {

    const currentBlock = blockchain[i];
    const previousBlock = blockchain[i - 1];

    if (currentBlock.previousHash !== previousBlock.hash) {
      return false;
    }

  }

  return true;
}


// VALIDATE BLOCKCHAIN API
function validateBlockchain(req, res) {

  const isValid = validateChain();

  res.json({
    blockchainValid: isValid
  });

}


module.exports = {
  submitMarks,
  getBlocks,
  validateBlockchain
};