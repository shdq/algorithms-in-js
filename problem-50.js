const sieve = require("./sieve");

function consPrimeSum(limit) {
  const primes = sieve(limit);
  const max = [];
  for (let i = primes.length - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      let sum = 0;
      let k = j;
      while (true) {
        sum += primes[k];
        if (sum > primes[i]) break;
        if (sum === primes[i]) {
          max.push({ amount: k - j, sum: primes[i] });
          break;
        }
        k++;
      }
    }
  }
  return max.reduce((prev, next) => (prev.amount > next.amount ? prev : next))
    .sum;
}

module.exports = { consPrimeSum };
