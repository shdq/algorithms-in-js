const { isPrime } = require("./problem-7");

function isTruncatable(n) {
  let str = n.toString();

  while (str.length > 0) {
    if (!isPrime(Number(str))) return false;
    str = str.slice(0, str.length - 1);
  }
  str = n.toString();
  while (str.length > 0) {
    if (!isPrime(Number(str))) return false;
    str = str.slice(1);
  }
  return true;
}

module.exports = { isTruncatable };
