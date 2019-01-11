// Euclid's algorithm for the greatest common divisor
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

// least common multiple using reduction by gcd
function lcm(a, b) {
  return a * b / gcd(a, b);
}

function multiple(n = 20) {
  const arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);

  return arr.reduce(lcm);
}

/*
it's fast solution, but not precise for n > 43,
because it exceed Number.MAX_SAFE_INTEGER in JavaScript
*/

module.exports = multiple;
