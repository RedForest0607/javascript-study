const crypto = require('crypto');

console.log('bash64: ', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex: ', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('bash64: ', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));