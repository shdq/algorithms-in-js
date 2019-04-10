const { factorialBigInt } = require("./factorial");

function digitSum(n) {
  return factorialBigInt(n)
    .toString()
    .split("")
    .reduce((sum, cur) => Number(sum) + Number(cur));
}

module.exports = digitSum;
