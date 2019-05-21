const { bigIntPow, distinctPow } = require("./problem-29");

/* eslint max-len: 0 */
describe("Tests for problem 29: Distinct powers", () => {
  test("returns pow for BigInt base number", () => {
    expect(bigIntPow(7n, 3)).toBe(343n);
  });

  test("returns amount of unique numbers in sequence up to a given number/power", () => {
    expect(distinctPow(100)).toBe(9183);
  });
});
