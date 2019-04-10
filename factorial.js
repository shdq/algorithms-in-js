function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
/* eslint new-cap: 0 */
function factorialBigInt(n) {
  n = BigInt(n);
  if (n <= BigInt(1)) return BigInt(1);
  return n * factorialBigInt(n - BigInt(1));
}

module.exports = { factorial, factorialBigInt };
