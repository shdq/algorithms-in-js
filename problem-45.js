function isPentagonal(n) {
  return ((1 + Math.sqrt(1 + 24 * n)) / 6) % 1 === 0;
}

module.exports = { isPentagonal };
