const { isTwiceSquare, solution } = require("./problem-46");
const sieve = require("./sieve");

/* eslint max-len: 0 */
describe("Tests for the problem 46: Goldbach's other conjecture", () => {
  test("returns true if square root of the number divided by 2 is integer", () => {
    expect(isTwiceSquare(18)).toBe(true);
  });

  test("returns the smallest odd composite that cannot be written as the sum of a prime and twice a square", () => {
    expect(solution(sieve(6000))).toBe(5777);
  });
});
