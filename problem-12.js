function triangularNum(n) {
  return (n * (n + 1)) / 2;
}

function factors(n) {
  const factors = [1];
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  return factors.length;
}

module.exports = { triangularNum, factors, highestTriangular };
