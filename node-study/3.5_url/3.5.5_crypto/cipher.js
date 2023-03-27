const crypto = require('crypto');
const buffer = require("buffer");
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || 'abcdefghijklmnop'.repeat(2);
const algorithm = 'aes-256-cbc';
const IV_LENGTH = 16;

let iv = crypto.randomBytes(IV_LENGTH);
const cipher = crypto.createCipheriv(algorithm, Buffer.from(ENCRYPTION_KEY), iv);
let result = cipher.update('암호화할 문장');
let encryptResult = iv.toString('hex') +
	':' +
	Buffer.concat([result, cipher.final()]).toString('hex');
console.log(encryptResult);

// Decrypt
const textParts = encryptResult.split(':');
const iv2 = Buffer.from(textParts.shift(), 'hex');
const encryptedText = Buffer.from(textParts.join(':'), 'hex');
const decipher = crypto.createDecipheriv(algorithm, Buffer.from(ENCRYPTION_KEY), iv2);
const decryptedResult = decipher.update(encryptedText);
console.log(Buffer.concat([decryptedResult, decipher.final()]).toString());