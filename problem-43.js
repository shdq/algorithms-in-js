const { nextPermutation } = require("./problem-24");

function hasProperty(seq) {
  const str = seq.join("");
  if (Number(str[1] + str[2] + str[3]) % 2 !== 0) return false;
  if (Number(str[2] + str[3] + str[4]) % 3 !== 0) return false;
  if (Number(str[3] + str[4] + str[5]) % 5 !== 0) return false;
  if (Number(str[4] + str[5] + str[6]) % 7 !== 0) return false;
  if (Number(str[5] + str[6] + str[7]) % 11 !== 0) return false;
  if (Number(str[6] + str[7] + str[8]) % 13 !== 0) return false;
  if (Number(str[7] + str[8] + str[9]) % 17 !== 0) return false;
  return true;
}

function solution() {
  let seq = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sum = 0;
  while (seq) {
    if (hasProperty(seq)) sum += Number(seq.join(""));
    seq = nextPermutation(seq);
  }
  return sum;
}

module.exports = solution;
