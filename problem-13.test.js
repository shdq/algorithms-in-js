const largeSum = require("./problem-13");

describe("Tests for problem 13: Large sum", () => {
  /* eslint max-len: 0 */
  test("returns a sum of a given numbers", () => {
    const NUM = "99999\n99999\n99999\n99999\n99999";
    expect(largeSum(NUM)).toBe(499995);
  });
});
