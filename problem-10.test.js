const sumPrimes = require("./problem-10");

describe("Tests for problem 10: Summation of primes", () => {
  /* eslint max-len: 0 */
  test("returns the sum of all the primes below 10", () => {
    expect(sumPrimes(10)).toBe(17);
  });
});
