const { isPrime } = require("./problem-7");

function countPrimes(a, b) {
  let n = -1;
  let number;
  do {
    n++;
    number = n * n + a * n + b;
  } while (isPrime(number));
  return n;
}

function getProduct() {
  let max = 0;
  let product;
  for (let a = -999; a < 1000; a++) {
    for (let b = -1000; b <= 1000; b++) {
      const amount = countPrimes(a, b);
      if (max < amount) {
        max = amount;
        product = a * b;
      }
    }
  }
  return product;
}

module.exports = { countPrimes, getProduct };
