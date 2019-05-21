function bigIntPow(base, exp) {
  let result = base;
  for (let i = 1; i < exp; i++) {
    result *= base;
  }
  return result;
}

function distinctPow(limit) {
  const sequence = new Set();
  for (let i = 2; i <= limit; i++) {
    for (let j = 2; j <= limit; j++) {
      /* eslint new-cap: 0 */
      sequence.add(bigIntPow(BigInt(i), j));
    }
  }
  return sequence.size;
}

module.exports = { bigIntPow, distinctPow };
