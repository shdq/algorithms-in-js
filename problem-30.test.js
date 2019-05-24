const { isSumOfPowers } = require("./problem-30");

/* eslint max-len: 0 */
describe("Tests for problem 30: Digit fifth powers", () => {
  test("returns true for the numbers that can be written as the sum of powers of their digits", () => {
    expect(isSumOfPowers(8208, 4)).toBe(true);
  });
});
