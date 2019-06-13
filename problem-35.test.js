const { rotate, generatePrimes, circularPrimes } = require("./problem-35");

/* eslint max-len: 0 */
describe("Tests for the problem 35: Circular primes", () => {
  test("returns rotated string", () => {
    expect(rotate("197")).toBe("971");
    expect(rotate("abc")).toBe("bca");
  });
  test("returns primes up to a given limit", () => {
    expect(generatePrimes(100).length).toBe(25);
    expect(generatePrimes(100)[20]).toBe(73);
  });
  test("returns circular primes up to a given limit", () => {
    expect(circularPrimes(100)).toBe(13);
  });
});
