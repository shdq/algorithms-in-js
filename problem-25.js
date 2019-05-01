function getIndex(digits = 1000) {
  const seq = [0n, 1n]; // BitInt needed for such big numbers
  for (let i = 2; ; i++) {
    if ((seq[i - 1] + seq[i - 2]).toString().length >= digits) return i;
    seq.push(seq[i - 1] + seq[i - 2]);
  }
}

module.exports = getIndex;
