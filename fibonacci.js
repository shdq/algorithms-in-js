function recFibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return recFibonacci(n - 2) + recFibonacci(n - 1);
}

function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence[sequence.length - 1];
}

module.exports = { fibonacci, recFibonacci };
