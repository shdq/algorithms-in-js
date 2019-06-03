function isPandigital(str) {
  const set = new Set(str.split(""));
  return set.size === 9 && !set.has("0");
}

function product() {
  const products = new Set();
  for (let i = 2; i < 100; i++) {
    let j;
    for (i < 10 ? (j = 1234) : (j = 123); j < 10000 / i; j++) {
      const product = i * j;
      if (isPandigital(i.toString() + j.toString() + product.toString())) {
        products.add(product);
      }
    }
  }
  return [...products].reduce((acc, cur) => acc + cur);
}

module.exports = { product, isPandigital };
