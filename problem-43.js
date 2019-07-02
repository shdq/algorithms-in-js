function multiplesOf(num) {
  const result = [];
  for (let i = 999; i >= 100; i--) {
    if (i % num === 0 && new Set(i.toString().split("")).size === 3) {
      result.push(i.toString());
    }
  }
  for (let i = 99; i >= 10; i--) {
    const str = "0" + i.toString();
    if (i % num === 0 && new Set(str.split("")).size === 3) {
      result.push(str);
    }
  }
  return result;
}

const m17 = multiplesOf(17);

function solution(candidates = m17, primes = [1, 2, 3, 5, 7, 11, 13]) {
  if (candidates[0].length === 10) {
    return candidates.reduce((acc, cur) => acc + Number(cur), 0);
  }
  let str = candidates.pop();
  const prime = primes.pop();
  const result = [];
  while (str) {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
      el => str.indexOf(el) < 0
    );

    for (const el of arr) {
      if (Number(el.toString() + str.slice(0, 2)) % prime === 0) {
        result.push(el.toString() + str);
      }
    }

    str = candidates.pop();
  }
  return solution(result, primes);
}

module.exports = solution;
