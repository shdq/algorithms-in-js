const { findFractions, productOfFractions } = require("./problem-33");

/* eslint max-len: 0 */
describe("Tests for the problem 33: Digit canceling fractions", () => {
  test("returns all the non-trivial fractions containing two digits in the numerator and denominator", () => {
    expect(findFractions().length).toBe(4);
  });

  test("returns denominator of product of all the non-trivial fractions", () => {
    expect(productOfFractions()).toBe(100);
  });
});
