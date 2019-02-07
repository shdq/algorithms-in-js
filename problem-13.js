function largeSum(n) {
  return n.split("\n").reduce((sum, val) => sum + Number(val), 0);
}

module.exports = largeSum;
