function isSumOfPowers(num, pow) {
  return (
    num ===
    num
      .toString()
      .split("")
      .map(el => Math.pow(el, pow))
      .reduce((acc, cur) => acc + cur)
  );
}

function findNumbers(pow) {
  const numbers = [];
  for (let i = Math.pow(9, pow) * (pow + 1); i > 1; i--) {
    if (isSumOfPowers(i, pow)) numbers.push(i);
  }
  return numbers.reduce((acc, cur) => acc + cur);
}

module.exports = { isSumOfPowers, findNumbers };
