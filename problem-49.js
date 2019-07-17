function sortInt(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => a - b)
      .join("")
  );
}

function solution(primes) {
  for (let i = 0; i < primes.length; i++) {
    for (let j = i + 1; j < primes.length; j++) {
      if (primes.indexOf(primes[j] - primes[i] + primes[j]) >= 0) {
        const first = primes[i].toString();
        const second = primes[j].toString();
        const third = (primes[j] - primes[i] + primes[j]).toString();

        if (
          sortInt(first) === sortInt(second) &&
          sortInt(first) === sortInt(third)
        ) {
          return first + second + third;
        }
      }
    }
  }
}

module.exports = { solution };
