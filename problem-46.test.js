const { isTwiceSquare, solution } = require("./problem-46");
const sieve = require("./sieve");

/* eslint max-len: 0 */
describe("Tests for the problem 45: Triangular, pentagonal, and hexagonal", () => {
  test("returns true if square root of the number divided by 2 is integer", () => {
    expect(isTwiceSquare(18)).toBe(true);
  });

  test("returns true if square root of the number divided by 2 is integer", () => {
    expect(solution(sieve(6000))).toBe(5777);
  });
});
