function triangularNum(n) {
  return (n * (n + 1)) / 2;
}

function factors(n) {
  const factors = [1];
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      factors.push(i);
      if (i !== n / i) {
        factors.push(n / i);
      }
    }
  }
  factors.push(n);
  return factors.length;
}

function highestTriangular(numFactors) {
  let n = 1;
  let number = 1;
  while (factors(number) <= numFactors) {
    number = triangularNum(n++);
  }
  return number;
}

module.exports = { triangularNum, factors, highestTriangular };
