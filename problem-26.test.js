const { getNumOfDigits } = require("./problem-26");

describe("Tests for problem 26: Reciprocal cycles", () => {
  /* eslint max-len: 0 */
  test("returns number of digits in recurring cycle of expression 1/n", () => {
    expect(getNumOfDigits(7)).toBe(6);
  });
});
