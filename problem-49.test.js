const { solution } = require("./problem-49");
const sieve = require("./sieve");
const primes = sieve(10000).filter(p => p >= 1489);

/* eslint max-len: 0 */
describe("Tests for the problem 49: Prime permutations", () => {
  test("returns 12 digit number concatenated by three 4 digit permutated primes", () => {
    expect(solution(primes).toString().length).toBe(12);
  });
  test("returns string with three concatenated 4 digit permutated primes", () => {
    expect(solution(primes)).toBe("296962999629");
  });
});
