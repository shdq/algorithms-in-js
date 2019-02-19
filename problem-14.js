function sequence(n, length = 0) {
  length++;
  if (n === 1) return length;
  if (n % 2 === 0) {
    return sequence(n / 2, length);
  }
  return sequence(3 * n + 1, length);
}

module.exports = sequence;
