var _a = require('./var'), odd = _a.odd, even = _a.even;
var checkNumber = require('./func');
function checkStringOddOrEven(str) {
    if (str.left % 2) {
        return odd;
    }
    return even;
}
console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));
//# sourceMappingURL=index.js.map