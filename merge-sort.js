function mergeSort(arr) {
  if (arr.length > 1) {
    const pivotPosition = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, pivotPosition));
    const right = mergeSort(arr.slice(pivotPosition));
    return mergeArr(left, right);
  }
  return arr;
}

function mergeArr(arr1, arr2) {
  const merged = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
      continue;
    }
    merged.push(arr2[j]);
    j++;
  }
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

module.exports = mergeSort;
