function divisorsSum(n) {
  let sum = 1;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum;
}

function amicable(n) {
  const sumA = divisorsSum(n);
  const sumB = divisorsSum(sumA);
  if (sumB === n) return sumA;
  return false;
}

module.exports = { divisorsSum, amicable };
