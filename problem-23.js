const { divisorsSum } = require("./problem-21");

function isAbundant(n) {
  if (n < 12) return false;
  if (divisorsSum(n) > n) return true;
  return false;
}

/*
  all integers greater than 28123 can be written
  as the sum of two abundant numbers
*/
const limit = 28123;

function fillSet() {
  const set = new Set();
  for (let i = 1; i < limit; i++) {
    if (isAbundant(i)) set.add(i);
  }
  return set;
}

function sumOfInt() {
  const abundNums = fillSet();
  let sum = 0;
  for (let i = limit; i > 0; i--) {
    let hasPair = false;
    for (const num of abundNums) {
      if (abundNums.has(i - num)) {
        hasPair = true;
        break;
      }
    }
    if (!hasPair) sum += i;
  }
  return sum;
}

module.exports = { isAbundant, sumOfInt };
