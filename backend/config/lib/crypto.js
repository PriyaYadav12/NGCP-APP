import crypto from 'node:crypto';

function generateRandomString() {
  const randomBytes = crypto.randomBytes(6); // 8 bytes (64 bits) for randomness
  const randomString = randomBytes.toString('hex');
  return randomString;
}

export { generateRandomString };
