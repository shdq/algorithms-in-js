function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
/* eslint new-cap: 0 */
function factorialBigInt(n) {
  n = BigInt(n);
  if (n <= 1n) return 1n;
  return n * factorialBigInt(n - 1n);
}

module.exports = { factorial, factorialBigInt };
