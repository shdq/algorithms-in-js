function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function findFractions() {
  const fractions = [];

  for (let i = 1; i <= 8; i++) {
    for (let j = i + 1; j <= 9; j++) {
      fractions.push({ i, j });
    }
  }

  const result = [];

  fractions.forEach(f => {
    for (let k = 1; k <= 9; k++) {
      let n = k * 10 + f.i;
      let d = k * 10 + f.j;
      if (
        f.i / gcd(f.i, f.j) === n / gcd(n, d) &&
        f.j / gcd(f.i, f.j) === d / gcd(n, d)
      )
        result.push({ n, d });

      d = f.j * 10 + k;
      if (
        f.i / gcd(f.i, f.j) === n / gcd(n, d) &&
        f.j / gcd(f.i, f.j) === d / gcd(n, d)
      )
        result.push({ n, d });

      n = f.i * 10 + k;
      if (
        f.i / gcd(f.i, f.j) === n / gcd(n, d) &&
        f.j / gcd(f.i, f.j) === d / gcd(n, d)
      )
        result.push({ n, d });

      d = k * 10 + f.j;
      if (
        f.i / gcd(f.i, f.j) === n / gcd(n, d) &&
        f.j / gcd(f.i, f.j) === d / gcd(n, d)
      )
        result.push([n, d]);
    }
  });

  return result.length;
}

module.exports = { findFractions };
