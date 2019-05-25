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

module.exports = { isSumOfPowers };
