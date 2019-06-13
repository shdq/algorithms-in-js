const { rotate } = require("./problem-35");

/* eslint max-len: 0 */
describe("Tests for the problem 35: Circular primes", () => {
  test("returns rotated string", () => {
    expect(rotate("197")).toBe("971");
    expect(rotate("abc")).toBe("bca");
  });
});
