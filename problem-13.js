function largeSum(n) {
  const arr = n.split("\n");
  let result = 0;
  let size;
  arr[0].length < 10 ? (size = arr[0].length - 1) : (size = 10);
  let i = 0;
  while (i <= size) {
    const rowSum = arr.reduce((sum, val) => sum + Number(val[i]), 0);
    const exp = size - i;
    result += rowSum * Math.pow(10, exp);
    i++;
  }
  const str = result.toString();
  if (str.length > 10) return Number(str.slice(0, 10));
  return result;
}

module.exports = largeSum;
