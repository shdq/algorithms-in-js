function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
}

function nextPermutation(arr) {
  let i = arr.length - 2;
  while (i !== -1 && arr[i + 1] <= arr[i]) i--;
  if (i === -1) return false; // no more permutations
  let j = arr.length - 1;
  while (arr[j] <= arr[i]) j--;
  swap(arr, i, j);
  const sorted = arr.slice(i + 1, arr.length).sort((a, b) => a - b);
  arr.splice(i + 1, arr.length - (i + 1), ...sorted);
  return arr;
}

function permutations(seq = [0, 1, 2], pos = 5) {
  let next = nextPermutation(seq);
  for (let i = 3; i <= pos; i++) {
    next = nextPermutation(next);
  }
  return next;
}

module.exports = { swap, nextPermutation, permutations };
