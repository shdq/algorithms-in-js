function diagonalsSum(size = 5, sum = 0) {
  if (size === 1) return sum + 1;
  const topRight = size * size;
  const topLeft = topRight - size + 1;
  const bottomLeft = topLeft - size + 1;
  const bottomRight = bottomLeft - size + 1;
  sum += topRight + topLeft + bottomLeft + bottomRight;
  return diagonalsSum(size - 2, sum);
}

module.exports = { diagonalsSum };
