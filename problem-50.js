const sieve = require("./sieve");

function consPrimeSum(limit) {
  const primes = sieve(limit);
  let result = 0;
  let amount = 0;
  for (let i = primes.length - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      let sum = 0;
      let k = j;
      while (true) {
        sum += primes[k];
        if (sum > primes[i]) break;
        if (sum === primes[i] && amount < k-j) {
          result = sum;
          amount = k - j;
          break;
        }
        k++;
      }
    }
  }
  return result;
}

module.exports = { consPrimeSum };
