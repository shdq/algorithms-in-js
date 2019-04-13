const { divisorsSum } = require("./problem-21");

describe("Tests for problem 21: Amicable numbers", () => {
  /* eslint max-len: 0 */
  test("returns sum of the proper divisors of a given number", () => {
    expect(divisorsSum(220)).toBe(284);
  });
});
