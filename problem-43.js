function multiplesOf(num) {
  const result = [];
  for (let i = 10; i <= 999; i++) {
    let str = i.toString();
    if (i < 100) str = "0" + str;
    if (i % num === 0 && new Set(str.split("")).size === 3) {
      result.push(str);
    }
  }
  return result;
}

function solution(
  candidates = multiplesOf(17),
  primes = [1, 2, 3, 5, 7, 11, 13]
) {
  if (candidates[0].length === 10) {
    return candidates.reduce((acc, cur) => acc + Number(cur), 0);
  }

  const reducedCandidates = [];
  const prime = primes.slice(-1);

  for (const candidate of candidates) {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
      num => candidate.indexOf(num) < 0
    );
    for (const num of arr) {
      if (Number(num.toString() + candidate.slice(0, 2)) % prime === 0) {
        reducedCandidates.push(num.toString() + candidate);
      }
    }
  }
  return solution(reducedCandidates, primes.slice(0, -1));
}

module.exports = { multiplesOf, solution };
