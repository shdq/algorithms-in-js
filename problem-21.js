function divisorsSum(n) {
  let sum = 1;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum;
}

module.exports = { divisorsSum };
