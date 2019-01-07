function fibonacci(n = 1000000) {
  const sequence = [1, 2];
  let i = 2;
  while (sequence[i - 1] + sequence[i - 2] < n) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
    i++;
  };
  return sequence;
}

function fiboSum(sequence) {
  return sequence;
}

module.exports = { fibonacci, fiboSum };
