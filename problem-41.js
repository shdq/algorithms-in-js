const sieve = require("./sieve");

function isPandigital(n) {
  const numDigits = n.toString().length;
  const arr = [];
  for (let i = 1; i <= numDigits; i++) arr.push(i);
  const str = n
    .toString()
    .split("")
    .sort((a, b) => (a < b ? -1 : 1))
    .join("");
  return arr.join("") === str;
}

function solution() {
  const primes = sieve(8000000);
  while (primes.length > 0) {
    const prime = primes.pop();
    if (isPandigital(prime)) return prime;
  }
  return -1;
}

module.exports = { solution };
