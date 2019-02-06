function largestProduct(n, str) {
  const arr = str.split("");
  let largest = 0;

  for (let i = 0; i < arr.length; i++) {
    const product = arr
      .slice(i, i + n)
      .reduce((prod, cur) => (prod *= Number(cur)));
    if (largest < product) {
      largest = product;
    }
  }

  return largest;
}

module.exports = largestProduct;
