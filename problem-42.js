function isTriangle(n) {
  // inverted formula t = (n * (n + 1)) / 2
  return (Math.sqrt(1 + 8 * n) - 1) / 2 % 1 === 0;
}

module.exports = { isTriangle };
