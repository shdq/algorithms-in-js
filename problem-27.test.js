const { countPrimes, getProduct } = require("./problem-27");

/* eslint max-len: 0 */
describe("Tests for problem 27: Quadratic primes", () => {
  test("returns amount of consecutive primes for a given variables for the quadratics formula", () => {
    expect(countPrimes(-79, 1601)).toBe(80);
  });

  test("empty function returns undefined", () => {
    expect(getProduct()).toBe(undefined);
  });
});
