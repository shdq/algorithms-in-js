function inputToArr(triangle) {
  const arr = [];
  triangle.split("\n").forEach(element => {
    arr.push(element.split(" "));
  });
  return arr;
}

function pathSum(triangle) {
  const arr = inputToArr(triangle);

  while (arr.length > 1) {
    const last = arr.pop();
    const previous = arr.pop();

    for (let i = 0; i < previous.length; i++) {
      previous[i] =
        Number(previous[i]) + Math.max(Number(last[i]), Number(last[i + 1]));
    }

    arr.push(previous);
  }
  return arr[0][0];
}

module.exports = pathSum;
