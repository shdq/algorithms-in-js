function largeSum(n) {
  const arr = n.split("\n");
  const result = [];
  let size;
  arr[0].length < 10 ? (size = arr[0].length - 1) : (size = 10);
  let i = 0;
  while (result.length <= size) {
    let temp = 0;
    temp = arr.reduce((sum, val) => sum + Number(val[i]), 0);
    const exp = size - i;
    result.push(temp * Math.pow(10, exp));
    i++;
  }
  const sum = result.reduce((sum, val) => sum + val);
  const str = sum.toString();
  if (str.length > 10) return Number(str.slice(0, 10));
  return sum;
}

module.exports = largeSum;
