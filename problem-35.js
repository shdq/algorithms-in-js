const { isPrime } = require("./problem-7");

function rotate(str) {
  return str.slice(1) + str[0];
}

function generatePrimes(limit = 100) {
  const primes = [];
  let n = 2;
  while (n <= limit) {
    if (isPrime(n)) primes.push(n);
    n++;
  }
  return primes;
}

module.exports = { rotate, generatePrimes };
