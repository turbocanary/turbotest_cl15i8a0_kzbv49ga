const crypto = require('crypto');
function anotherInsecurePassword() {
  // GOOD: the random suffix is cryptographically secure
  var randomBuffer = crypto.randomBytes(4); // 32 bits
  var randomUInt32 = randomBuffer.readUInt32BE(0);
  var suffix = randomUInt32 * Math.pow(2, -32); // scale to [0,1)
  var password = "sssAAAA" + suffix;
  return password;
}