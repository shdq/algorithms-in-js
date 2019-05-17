const { countPrimes, getProduct } = require("./problem-27");

/* eslint max-len: 0 */
describe("Tests for problem 27: Quadratic primes", () => {
  test("returns amount of consecutive primes for a given variables for the quadratics formula", () => {
    expect(countPrimes(-79, 1601)).toBe(80);
  });

  test("returns product of coefficients in the quadratics formula, that generates maximum number of consecutive primes", () => {
    expect(getProduct()).toBe(-59231);
  });
});
