function genPentagonal(amount) {
  const numbers = [];
  for (let i = 1; i <= amount; i++) {
    numbers.push((i * (3 * i - 1)) / 2);
  }
  return numbers;
}

function solution(numbers = genPentagonal(2200)) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j <= numbers.length; j++) {
      const p = numbers[i] + numbers[j];
      if (((1 + Math.sqrt(1 + 24 * p)) / 6) % 1 === 0) {
        const d = Math.abs(numbers[i] - numbers[j]);
        if (((1 + Math.sqrt(1 + 24 * d)) / 6) % 1 === 0) {
          return d;
        }
      }
    }
  }
}

module.exports = { genPentagonal, solution };
