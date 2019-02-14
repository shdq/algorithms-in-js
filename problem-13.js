function largeSum(numbers, nDigits = 10) {
  const arr = numbers.split("\n");
  let result = 0;

  let numLength;
  arr[0].length < nDigits
    ? (numLength = arr[0].length - 1)
    : (numLength = nDigits);

  for (let i = 0; i <= numLength; i++) {
    const columnSum = arr.reduce((sum, val) => sum + parseInt(val[i]), 0);
    const exp = numLength - i;
    result += columnSum * Math.pow(10, exp);
  }

  // round result to first N digits
  const resultLength = Math.ceil(Math.log10(result + 1));
  if (resultLength > nDigits) {
    return Math.floor(result / Math.pow(10, resultLength - nDigits));
  }

  return result;
}

module.exports = largeSum;
