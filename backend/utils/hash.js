
const crypto = require("crypto");

function generateMarksHash(data) {
    const hash = crypto
        .createHash("sha256")
        .update(JSON.stringify(data))
        .digest("hex");

    return hash;
}

module.exports = generateMarksHash;