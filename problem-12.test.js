const { triangleNum } = require("./problem-12");

describe("Tests for problem 12: Highly divisible triangular number", () => {
  /* eslint max-len: 0 */
  test("returns Nth triangle number", () => {
    expect(triangleNum(6)).toBe(21);
  });
});
