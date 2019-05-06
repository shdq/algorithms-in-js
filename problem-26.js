function repeatingDecimal(n) {
  let result = "0.";
  let num = 10;

  while (true) {
    if (num % n === num) {
      result += "0";
      num *= 10;
    }

    if (num % n < num) {
      result += Math.floor(num / n).toString();
      num -= n * Math.floor(num / n);
      num *= 10;
    }

    if (num % n === 0) return false;
    if (result.length > 2000) break;
  }
  return result;
}

function getNumOfDigits(n) {
  const str = repeatingDecimal(n);
  if (!str) return false;

  for (let digits = 1; digits < str.length; digits++) {
    let testStr = str;
    for (let j = testStr.length; j > 0; j - digits) {
      const subStr = testStr.slice(j - digits);
      testStr = testStr.slice(0, j - digits);
      const nextSubStr = testStr.slice(testStr.length - digits);
      if (nextSubStr !== subStr) break;
      if (subStr === nextSubStr) {
        return subStr.length;
      }
    }
  }
}

function maxDigits(n = 1000) {
  let max = 0;
  let value = 0;
  for (let i = n; i > 1; i--) {
    const digits = getNumOfDigits(i);
    if (digits > max) {
      max = digits;
      value = i;
    }
  }
  return value;
}

module.exports = { repeatingDecimal, getNumOfDigits, maxDigits };
