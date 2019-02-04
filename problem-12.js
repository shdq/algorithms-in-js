function triangularNum(n) {
  return (n * (n + 1)) / 2;
}

function factors(n) {
  const factors = [1];
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  return factors.length;
}

/*
  TODO: time optimization needed,
  impossible to get triangular number with >500 factors to solve the problem;
*/
function highestTriangular(numFactors) {
  let n = 1;
  let number = 1;
  while (factors(number) <= numFactors) {
    number = triangularNum(n++);
  }
  return number;
}

console.log(highestTriangular(200));

module.exports = { triangularNum, factors, highestTriangular };
