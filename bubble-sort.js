function bubbleSort(arr) {
  let sorted = false;
  let length = arr.length;
  while (!sorted) {
    let swapped = false;
    for (let i = 0; i < length; i++) {
      if (arr[i] > arr[i + 1] && (i + 1) != arr.length) {
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

console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));

// -> [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]