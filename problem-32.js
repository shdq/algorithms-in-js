function isPandigital(str) {
  const set = new Set(str.split(""));

  return set.size === 9 && !set.has("0");
}

module.exports = { product, isPandigital };
