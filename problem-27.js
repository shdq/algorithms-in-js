const { isPrime } = require("./problem-7");

function countPrimes(a, b) {
  let n = -1;
  let number;
  do {
    n++;
    number = n * n + a * n + b;
  } while (isPrime(number));
  return n;
}

function getProduct() {
  return;
}

module.exports = { countPrimes, getProduct };
