const { consPrimeSum } = require("./problem-50");

/* eslint max-len: 0 */
describe("Tests for the problem 50: Consecutive prime sum", () => {
  test("returns the longest sum of consecutive primes below limit", () => {
    expect(consPrimeSum(1000)).toBe(953);
  });
});
