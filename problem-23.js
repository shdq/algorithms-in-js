const { divisorsSum } = require("./problem-21");

function isAbundant(n) {
  if (n < 12) return false;
  if (divisorsSum(n) > n) return true;
  return false;
}

module.exports = { isAbundant };
