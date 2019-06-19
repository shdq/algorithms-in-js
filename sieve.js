function sieve(n) {
  const primes = new Array(n).fill(true);
  for (let i = 2; i * i <= n; i++) {
    if (primes[i]) for (let j = i * i; j <= n; j += i) primes[j] = false;
  }
  primes.map((val, idx, arr) => {
    if (val) arr[idx] = idx;
  });
  return primes.filter(val => val !== false).slice(2);
}

module.exports = sieve;
