const digitSum = require("./problem-20");

describe("Tests for problem 20: Factorial digit sum", () => {
  /* eslint max-len: 0 */
  test("returns sum of the digits in the factorial of a given number", () => {
    expect(digitSum(10)).toBe(27);
  });
  test("returns sum of the digits in the factorial of a given big number", () => {
    expect(digitSum(100)).toBe(648);
  });
});
