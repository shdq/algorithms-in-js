class Matrix {
  constructor(width, height) {
    this.name = "Matrix";
    this.width = width;
    this.height = height;
    this.data = [];
  }

  width() {
    return this.width;
  }

  height() {
    return this.height;
  }

  fill(string) {
    const arr = string.split(" ");

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        this.data[i * this.width + j] = Number(arr[i * this.width + j]);
      }
    }
  }

  get(i, j) {
    if (i > this.height - 1 || j > this.width - 1 || i < 0 || j < 0) {
      // out of range
      return false;
    }
    return this.data[i * this.width + j];
  }
}

function largestProduct(grid) {
  let product = 0;
  for (let i = 0; i < grid.height; i++) {
    for (let j = 0; j < grid.width; j++) {
      // right
      product = Math.max(
        product,
        grid.get(i, j) *
          (grid.get(i, j + 1) || 1) *
          (grid.get(i, j + 2) || 1) *
          (grid.get(i, j + 3) || 1)
      );
      // left
      product = Math.max(
        product,
        grid.get(i, j) *
          (grid.get(i, j - 1) || 1) *
          (grid.get(i, j - 2) || 1) *
          (grid.get(i, j - 3) || 1)
      );
      // top
      product = Math.max(
        product,
        grid.get(i, j) *
          (grid.get(i - 1, j) || 1) *
          (grid.get(i - 2, j) || 1) *
          (grid.get(i - 3, j) || 1)
      );
      // bottom
      product = Math.max(
        product,
        grid.get(i, j) *
          (grid.get(i, j + 1) || 1) *
          (grid.get(i, j + 2) || 1) *
          (grid.get(i, j + 3) || 1)
      );
      // diagonal-bottom-right
      product = Math.max(
        product,
        grid.get(i, j) *
          (grid.get(i + 1, j + 1) || 1) *
          (grid.get(i + 2, j + 2) || 1) *
          (grid.get(i + 3, j + 3) || 1)
      );
      // diagonal-bottom-left
      product = Math.max(
        product,
        grid.get(i, j) *
          (grid.get(i + 1, j - 1) || 1) *
          (grid.get(i + 2, j - 2) || 1) *
          (grid.get(i + 3, j - 3) || 1)
      );
      // diagonal-top-left
      product = Math.max(
        product,
        grid.get(i, j) *
          (grid.get(i - 1, j - 1) || 1) *
          (grid.get(i - 2, j - 2) || 1) *
          (grid.get(i - 3, j - 3) || 1)
      );
      // diagonal-top-right
      product = Math.max(
        product,
        grid.get(i, j) *
          (grid.get(i - 1, j + 1) || 1) *
          (grid.get(i - 2, j + 2) || 1) *
          (grid.get(i - 3, j + 3) || 1)
      );
    }
  }
  return product;
}

module.exports = { Matrix, largestProduct };
