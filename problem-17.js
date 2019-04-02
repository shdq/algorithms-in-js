/* eslint max-len: 0 */
const zeroTo19 = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
const tens = "zero ten twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

function numToEnWord(n) {
  if (n < 20) return zeroTo19[n];
  if (n < 100) {
    return tens[Math.floor(n / 10)] + (n % 10 ? "-" + zeroTo19[n % 10] : "");
  }
  if (n < 1000) {
    return (
      numToEnWord(Math.floor(n / 100)) +
      " hundred" +
      (n % 100 ? " and " + numToEnWord(n % 100) : "")
    );
  }
  return "one thousand";
}

function countLetters(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += numToEnWord(i)
      .replace(/\s/g, "")
      .replace(/-/g, "")
      .length;
  }
  return sum;
}

module.exports = countLetters;
