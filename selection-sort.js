function selectionSort(array) {
  let arr = array;
  let result = [];

  while (arr.length > 0) {
    let pos = 0;
    let min = arr[pos];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        pos = i;
      }
    }

    result.push(arr.splice(pos, 1)[0]);
  }
  return result;
}

module.exports = selectionSort;
