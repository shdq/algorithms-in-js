function permutate(arr, result = []) {
  (function heapPermutation(arr, n = arr.length) {
    if (n === 1) return result.push(Number(arr.join("")));
    for (let i = 0; i < n; i++) {
      heapPermutation(arr, n - 1);
      n % 2 === 0
        ? ([arr[0], arr[n - 1]] = [arr[n - 1], arr[0]])
        : ([arr[i], arr[n - 1]] = [arr[n - 1], arr[i]]);
    }
  })(arr);
  return result;
}

module.exports = permutate;
