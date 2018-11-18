function insertionSort(arr) {
  let result = [arr.shift()];
  
  while (arr.length > 0) {
    let el = arr.shift();

    for (let i = result.length - 1; i >= 0; i--) {
      if (el > result[i]) {
        result.splice(i + 1, 0, el);
        break;
      }
      if (el < result[i] && el >= result[i - 1]) {
        result.splice(i, 0, el);
        break;
      }
      if (el < result[i] && el < result[i - 1]) {
        continue;
      } 
    }
  }
  return result;
}

module.exports = insertionSort;
