const { isTriangle } = require("./problem-42");

function isPentagonal(n) {
  return ((1 + Math.sqrt(1 + 24 * n)) / 6) % 1 === 0;
}

function solution(position = 144) {
  let n = 0;
  while (!isPentagonal(n) || !isTriangle(n)) {
    n = position * (2 * position - 1); // next hexagonal
    position++;
  }
  return n;
}

module.exports = { isPentagonal, solution };
