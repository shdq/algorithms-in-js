function genPentagonal(amount) {
  const numbers = [];
  for (let i = 1; i <= amount; i++) {
    numbers.push((i * (3 * i - 1)) / 2);
  }
  return numbers;
}

module.exports = { genPentagonal };
