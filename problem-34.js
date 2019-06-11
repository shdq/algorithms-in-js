const { factorial } = require("./factorial");

function serializeFactorials() {
  const array = [1];
  for (let i = 1; i <= 9; i++) {
    array.push(factorial(i));
  }
  return array;
}

function solution() {
  const FACTORIALS = serializeFactorials();
  const curiousDigits = [];
  for (let i = 2540160; i > 2; i--) {
    const sum = i
      .toString()
      .split("")
      .map((val, index, array) => (array[index] = FACTORIALS[val]))
      .reduce((acc, cur) => acc + cur);
    if (i === sum) curiousDigits.push(i);
  }
  return curiousDigits.reduce((acc, cur) => acc + cur);
}

module.exports = { serializeFactorials, solution };
