function solution() {
  const arr = [];
  let i = 0;
  while (arr.length <= 1000000) {
    arr.push(...i.toString().split(""));
    i++;
  }
  return (
    arr[1] *
    arr[10] *
    arr[100] *
    arr[1000] *
    arr[10000] *
    arr[100000] *
    arr[1000000]
  );
}

module.exports = { solution };
