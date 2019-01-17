function isPrime(n) {
  if (n === 2 || n === 3) return true;
  if (n < 2 || n % 2 === 0) return false;
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function nthPrime(n) {
  let count = 0;
  for (let i = 1; ; i++) {
    if (isPrime(i)) {
      count++;
    }
    if (count === n) return i;
  }
}

module.exports = { isPrime, nthPrime };
