function createBlock(index, timestamp, data, previousHash, hash) {

  return {
    index: index,
    timestamp: timestamp,
    data: data,
    previousHash: previousHash,
    hash: hash
  };

}

module.exports = createBlock;