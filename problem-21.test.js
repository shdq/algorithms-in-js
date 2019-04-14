const { divisorsSum, amicable } = require("./problem-21");

describe("Tests for problem 21: Amicable numbers", () => {
  /* eslint max-len: 0 */
  test("returns sum of the proper divisors of a given number", () => {
    expect(divisorsSum(220)).toBe(284);
  });

  test("returns amicable number a given number", () => {
    expect(amicable(284)).toBe(220);
  });

  test("returns false is there is no amicable number a given number", () => {
    expect(amicable(500)).toBe(false);
  });

});
