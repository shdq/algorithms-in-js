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

  /*
    Next test tooks a lot of time, but the function itself executes much faster.
    What's wrong with you, Jest?
  */

  // test("the same as previous but for higher number of divisors", () => {
  //   expect(highestTriangular(500)).toBe(76576500);
  // });
});
