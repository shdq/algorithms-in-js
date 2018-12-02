function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  while (start < end) {
    const pivot = start + Math.floor((end - start) / 2);
    arr[pivot] < val ? start = pivot + 1 : end = pivot;
  }
  if (arr[end] === val) {
    return end;
  }
  return -1;
}

module.exports = binarySearch;
