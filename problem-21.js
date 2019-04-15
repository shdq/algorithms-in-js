function divisorsSum(n) {
  let sum = 1;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum;
}

function amicable(n) {
  const sumA = divisorsSum(n);
  const sumB = divisorsSum(sumA);
  if (n === sumB && n !== sumA) return sumA;
  return false;
}

function amicableSum(n) {
  const arr = [];
  for (let i = n; i > 0; i--) {
    if (!arr.includes(i)) {
      const number = amicable(i);
      if (number !== false) arr.push(i, number);
    }
  }
  return arr.reduce((acc, val) => acc + val);
}

module.exports = { divisorsSum, amicable, amicableSum };
