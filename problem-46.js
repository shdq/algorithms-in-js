function isTwiceSquare(n) {
  return Math.sqrt(n / 2) % 1 === 0;
}

function solution(primes) {
  let result = 33;
  let isFound = true;
  while (isFound) {
    isFound = false;
    result += 2;
    for (const prime of primes) {
      if (prime > result) break;
      if (isTwiceSquare(result - prime)) {
        isFound = true;
        break;
      }
    }
  }
  return result;
}

module.exports = { isTwiceSquare, solution };
