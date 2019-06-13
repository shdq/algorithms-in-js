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

function circularPrimes(limit = 1000000) {
  const PRIMES = generatePrimes(limit);
  const result = [];
  for (const prime of PRIMES) {
    let isCircular = true;
    let number = prime;
    while (isCircular) {
      number = rotate(number.toString());
      if (number === prime.toString()) break;
      if (!isPrime(Number(number))) isCircular = false;
    }
    if (isCircular) result.push(prime);
  }
  return result.length;
}

module.exports = { rotate, generatePrimes, circularPrimes };
