export {};
const {oddMsg, evenMsg} = require('./var');

function checkOddOrEven(num) {
    if (num % 2) {
        return oddMsg;
    }
    return evenMsg;
}

module.exports = checkOddOrEven;