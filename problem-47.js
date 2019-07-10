function numOfPrimeFactors(n, primes) {
  const factors = new Set();
  for (const prime of primes) {
    if (n < prime) break;
    while (n % prime === 0) {
      factors.add(prime);
      n /= prime;
    }
  }
  return factors.size;
}

function solution(primes) {
  let i = 2 * 3 * 5 * 7;
  let cons = 0;
  while (true) {
    if (cons === 4) return i - 4;
    if (numOfPrimeFactors(i, primes) === 4) {
      cons++;
      i++;
      continue;
    }
    cons = 0;
    i++;
  }
}

module.exports = { numOfPrimeFactors, solution };
