const crypto = require('crypto');

Object.keys(crypto);

const randomBytes = crypto.randomBytes(16);
const randomID = randomBytes.toString('hex');

console.log('Random ID:', randomID);