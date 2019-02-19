function sequence(n, length = 0) {
  length++;
  if (n === 1) return length;
  if (n % 2 === 0) {
    return sequence(n / 2, length);
  }
  return sequence(3 * n + 1, length);
}

function longestSeq(n = 1000000) {
  let num = 0;
  let longest = 0;
  for (; n >= 2; n--) {
    const length = sequence(n);
    if (longest < length) {
      longest = length;
      num = n;
    }
  }
  return num;
}

module.exports = { sequence, longestSeq };
