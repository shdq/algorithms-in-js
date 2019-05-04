const { getNumOfDigits } = require("./problem-26");

describe("Tests for problem 26: Reciprocal cycles", () => {
  /* eslint max-len: 0 */
  test("returns number of digits in recurring cycle of expression 1/n", () => {
    expect(getNumOfDigits(7)).toBe(6);
  });

  test("returns number of digits in cycle even if the cycle starts after other digits like 0.1(6)", () => {
    expect(getNumOfDigits(6)).toBe(1);
  });

  test("returns false if there is no recurring cycle in the expression 1/n", () => {
    expect(getNumOfDigits(5)).toBe(false);
  });
});
