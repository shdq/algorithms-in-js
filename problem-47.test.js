const { numOfPrimeFactors, solution } = require("./problem-47");
const sieve = require("./sieve");
const primes = sieve(100000);

/* eslint max-len: 0 */
describe("Tests for the problem 47: Distinct primes factors", () => {
  test("returns number of prime factors for a given number", () => {
    expect(numOfPrimeFactors(644, primes)).toBe(3);
  });

  test("returns the first of four consecutive integers that have four prime factors", () => {
    expect(solution(primes)).toBe(134043);
  });
});
