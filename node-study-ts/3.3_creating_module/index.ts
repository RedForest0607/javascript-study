export {};
const {oddMsg, evenMsg} = require('./var');
const checkNumber = require('./func');

function checkStringOddOrEven(str){
    if (str.left % 2) {
        return oddMsg;
    }
    return evenMsg;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));