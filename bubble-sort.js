function bubbleSort(arr) {
  let sorted = false;
  let length = arr.length;
  while (!sorted) {
    let swapped = false;
    for (let i = 0; i < length; i++) {
      if (arr[i] > arr[i + 1] && (i + 1) != length) {
        let swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
        swapped = true;
      }
    }
    length--;
    if (!swapped) sorted = true;
  }
  return arr;
}

module.exports = bubbleSort;