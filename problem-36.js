function isPalindrom(str) {
  return (
    str.toUpperCase() ===
    str
      .split("")
      .reverse()
      .join("")
      .toUpperCase()
  );
}

function solution() {
  let sum = 0;
  for (let i = 1; i < 1000000; i++) {
    if (isPalindrom(i.toString()) && isPalindrom(i.toString(2))) sum += i;
  }
  return sum;
}

module.exports = { isPalindrom, solution };
