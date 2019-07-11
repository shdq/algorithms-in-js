function selfPowers(n) {
  if (n <= 1) return 1n;
  return n ** n + selfPowers(n - 1n);
}

// const solution = selfPowers(1000n).toString().slice(-10);

module.exports = { selfPowers };
