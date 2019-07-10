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

module.exports = { numOfPrimeFactors };
