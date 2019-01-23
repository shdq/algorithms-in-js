function triplet() {
  for (let i = 3; i < 500; i++) {
    for (let j = 3; j < i; j++) {
      const n = Math.sqrt(i * i + j * j);
      if (n % 1 === 0) {
        if (i + j + n === 1000) {
          return [i, j, n];
        }
      }
    }
  }
}

module.exports = triplet;
