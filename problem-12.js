function triangleNum(n) {
  if (n > 1) {
    return n + triangleNum(n - 1);
  }
  return 1;
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

module.exports = { triangleNum, factors };
