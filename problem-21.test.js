const { divisorsSum, amicable, amicableSum } = require("./problem-21");

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

  test("returns false is there is no amicable number a given number", () => {
    expect(amicable(500)).toBe(false);
  });

  test("returns sum of all amicable numbers under a given number", () => {
    expect(amicableSum(10000)).toBe(31626);
  });
});
