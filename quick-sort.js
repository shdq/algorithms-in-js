function quickSort(arr, first = 0, last = arr.length - 1) {
  if (first < last) {
    const pivotPosition = partition(arr, first, last);
    quickSort(arr, first, pivotPosition - 1);
    quickSort(arr, pivotPosition + 1, last);
  }
  return arr;
}

function partition(arr, first, last) {
  const pivot = arr[last];
  let index = first - 1;
  for (let j = first; j <= last - 1; j++) {
    if (arr[j] < pivot) {
      index++;
      const temp = arr[index];
      arr[index] = arr[j];
      arr[j] = temp;
    }
  }
  index++;
  const temp = arr[index];
  arr[index] = arr[last];
  arr[last] = temp;

  return index;
};

module.exports = quickSort;
