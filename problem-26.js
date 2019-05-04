function getNumOfDigits(n) {
  const expResult = 1 / n;
  const str = expResult.toString().split(".")[1];

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
  return false;
}

module.exports = { getNumOfDigits };
