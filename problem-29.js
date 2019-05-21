function bigIntPow(base, exp) {
  let result = base;
  for (let i = 1; i < exp; i++) {
    result *= base;
  }
  return result;
}

module.exports = { bigIntPow };
