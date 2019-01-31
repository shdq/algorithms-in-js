const Matrix = require("./problem-11");

describe("Tests for problem 11: Largest product in a grid", () => {
  /* eslint max-len: 0 */
  test("creates matrix with 5x5 dimension, fill with the data and returns value for certain position", () => {
    const DATA = "00 01 02 10 11 12 20 21 22";
    const m = new Matrix(3, 3);
    m.fill(DATA);
    expect(m.get(2, 2)).toBe(22);
  });
});
