const { isPentagonal } = require("./problem-45");

/* eslint max-len: 0 */
describe("Tests for the problem 45: Triangular, pentagonal, and hexagonal", () => {
  test("returns true if number is penragonal", () => {
    expect(isPentagonal(35)).toBe(true);
  });
});
