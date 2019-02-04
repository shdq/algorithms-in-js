const { triangularNum, factors, highestTriangular } = require("./problem-12");

describe("Tests for problem 12: Highly divisible triangular number", () => {
  /* eslint max-len: 0 */
  test("returns Nth triangular number", () => {
    expect(triangularNum(6)).toBe(21);
  });

  test("returns amount of factors of a given number", () => {
    expect(factors(21)).toBe(4);
  });

  test("returns the first highest triangular number to have over a given number of divisors", () => {
    expect(highestTriangular(5)).toBe(28);
  });
});
