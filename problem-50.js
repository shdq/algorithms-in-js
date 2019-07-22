const sieve = require("./sieve");

function consPrimeSum(limit) {
  const primes = sieve(limit);
  let amount = 0;
  let max = 0;
  let lastJ = primes.length;
  for (let i = primes.length - 1; i >= 1; i--) {
    for (let j = i + amount; j <= lastJ; j++) {
      const sum = primes.slice(i, j + 1).reduce((acc, val) => acc + val);
      if (sum > limit) {
        lastJ = j + 1;
        break;
      }
      if (primes.indexOf(sum) > -1) {
        amount = j - i;
        max = sum;
      }
    }
  }
  return max;
}

module.exports = { consPrimeSum };
