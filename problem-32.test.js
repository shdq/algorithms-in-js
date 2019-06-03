const { product, isPandigital } = require("./problem-32");

/* eslint max-len: 0 */
describe("Tests for problem 32: Pandigital products", () => {
  test("returns true if given product is pandigital", () => {
    expect(isPandigital(7254)).toBe(true);
  });

  test("returns the sum of all pandigital products", () => {
    expect(product()).toBe(45228);
  });
});
