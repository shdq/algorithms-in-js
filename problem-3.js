function factorization(n) {
  for (let i = 2; i < Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return factorization(n / i);
    }
  }
  return n;
}

module.exports = factorization;
