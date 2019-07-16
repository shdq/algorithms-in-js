function solution(primes) {
  for (let i = 0; i < primes.length; i++) {
    for (let j = i + 1; j < primes.length; j++) {
      if (primes.indexOf(primes[j] - primes[i] + primes[j]) >= 0) {
        const one = primes[i].toString();
        const two = primes[j].toString();
        const three = (primes[j] - primes[i] + primes[j]).toString();

        /* if one two and three are permutataions of each other */
        return one + two + three;
      }
    }
  }
}

module.exports = { solution };
