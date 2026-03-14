function createBlock(index, timestamp, data, previousHash, hash) {

  return {
    index,
    timestamp,
    data,
    previousHash,
    hash
  };

}

module.exports = createBlock;