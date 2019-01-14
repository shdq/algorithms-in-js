function sumSquare(n) {
  let result = 0;
  result += n * n;
  if (n > 1) return (result += sumSquare(n - 1));
  return result;
}

function sqrDiff(n) {
  return n;
}

console.log(sumSquare(10));

module.exports = { sumSquare, sqrDiff };
