function insertionSort(arr) {
  let i, j, el;
  for (i = 1; i < arr.length; i++) {
    el = arr[i]; 
    j = i - 1; 
    while (j >= 0 && arr[j] > el) { 
      arr[j + 1] = arr[j]; 
      j--;
    } 
    arr[j + 1] = el;
  }
  return arr;
}

module.exports = insertionSort;
