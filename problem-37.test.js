const { isTruncatable } = require("./problem-37");

/* eslint max-len: 0 */
describe("Tests for the problem 37: Truncatable primes", () => {
  test("returns true if prime number is truncatable", () => {
    expect(isTruncatable(3797)).toBe(true);
  });
});
