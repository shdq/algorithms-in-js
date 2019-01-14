function sumSquare(n) {
  let sum = 0;
  sum += n * n;
  if (n > 1) return (sum += sumSquare(n - 1));
  return sum;
}

function squareSum(n) {
  let sum = 0;
  for (let i = n; i >= 1; i--) {
    sum += i;
  }
  return sum * sum;
}

function sqrDiff(n) {
  return squareSum(n) - sumSquare(n);
}

module.exports = { sumSquare, squareSum, sqrDiff };
