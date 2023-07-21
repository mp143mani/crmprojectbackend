// config.js
const crypto = require('crypto');

// Generate a random secret key with 32 bytes (256 bits)
const secretKey = crypto.randomBytes(32).toString('hex');

module.exports = {
  secretKey: secretKey,
  // Other configuration options if needed
};
