const { alphaValue } = require("./problem-22");

function solution(words) {
  const arr = words.replace(/"/g, "").split(",");
  let count = 0;
  arr.forEach(word => {
    if (isTriangle(alphaValue(word))) count++;
  });
  return count;
}

function isTriangle(n) {
  // inverted formula t = (n * (n + 1)) / 2
  return ((Math.sqrt(1 + 8 * n) - 1) / 2) % 1 === 0;
}

module.exports = { isTriangle, solution };
