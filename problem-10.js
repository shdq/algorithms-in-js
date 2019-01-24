const { isPrime } = require("./problem-7");

function sumPrimes(limit = 2000000) {
  let sum = 0;
  let n = 2;
  while (n <= limit) {
    if (isPrime(n)) sum += n;
    n++;
  }
  return sum;
}

module.exports = sumPrimes;
