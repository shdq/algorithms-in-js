const { isAbundant, sumOfInt } = require("./problem-23");

describe("Tests for problem 23: Non-abundant sums", () => {
  /* eslint max-len: 0 */
  test("checks the lowest abundant number for abundance", () => {
    expect(isAbundant(12)).toBe(true);
  });

  test("checks perfect number for abundance", () => {
    expect(isAbundant(28)).toBe(false);
  });

  test("checks number for abundance", () => {
    expect(isAbundant(42)).toBe(true);
  });

  test("returns the sum of all the positive integers which cannot be written as the sum of two abundant numbers", () => {
    expect(sumOfInt()).toBe(4179871);
  });
});
