const getIndex = require("./problem-25");

describe("Tests for problem 25: 1000-digit Fibonacci number", () => {
  /* eslint max-len: 0 */
  test("returns index of the first fibonacci number that contain given number of digits in it", () => {
    expect(getIndex(3)).toBe(12);
  });
});
