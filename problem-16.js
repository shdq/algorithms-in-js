function powerSum(n) {
  /* eslint new-cap: 0 */
  return BigInt(Math.pow(2, n))
    .toString()
    .split("")
    .reduce((acc, cur) => Number(acc) + Number(cur));
}

module.exports = powerSum;
