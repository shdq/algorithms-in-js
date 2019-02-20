function sequence(n, length = 0, dataMap) {
  if (dataMap && dataMap.has(n)) return dataMap.get(n) + length;
  length++;
  if (n === 1) return length;
  if (n % 2 === 0) {
    return sequence(n / 2, length, dataMap);
  }
  return sequence(3 * n + 1, length, dataMap);
}

function longestSeq(n = 1000000) {
  const dataMap = new Map();
  let num = 0;
  let longest = 0;
  for (let i = 2; i <= n; i++) {
    const length = sequence(i, 0, dataMap);
    dataMap.set(i, length);
    if (longest < length) {
      longest = length;
      num = i;
    }
  }
  return num;
}

module.exports = { sequence, longestSeq };
