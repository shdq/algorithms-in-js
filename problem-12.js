function triangleNum(n) {
  if (n > 1) {
    return n + triangleNum(n - 1);
  }
  return 1;
}

module.exports = { triangleNum };
