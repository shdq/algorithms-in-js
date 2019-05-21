const { distinctPow } = require("./problem-29");

/* eslint max-len: 0 */
describe("Tests for problem 29: Distinct powers", () => {
  test("returns amount of unique numbers in sequence up to a given number/power", () => {
    expect(distinctPow(5)).toBe(15);
  });
});
