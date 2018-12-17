function divisor(a, b) {
  if (a % b === 0) {
    return b;
  }
  return divisor(b, (a % b));
}

module.exports = divisor;
