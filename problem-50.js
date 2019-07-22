const sieve = require("./sieve");

function consPrimeSum(limit) {
  const primes = sieve(limit);
  let maxSequence = 0;
  let maxSum = 0;
  for (let i = 0; i < primes.length; i++) {
    /*
    sequence less than we already have isn't interested for us,
    thats why we start inner loop with j = i + amount
    */
    for (let j = i + maxSequence; j <= primes.length; j++) {
      const sum = primes.slice(i, j + 1).reduce((acc, val) => acc + val);
      if (sum > limit) break;
      if (primes.indexOf(sum) > -1 && j - i > maxSequence) {
        maxSequence = j - i;
        maxSum = sum;
      }
    }
  }
  return maxSum;
}

module.exports = { consPrimeSum };
