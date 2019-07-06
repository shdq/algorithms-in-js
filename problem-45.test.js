const { isPentagonal, solution } = require("./problem-45");

/* eslint max-len: 0 */
describe("Tests for the problem 45: Triangular, pentagonal, and hexagonal", () => {
  test("returns true if number is penragonal", () => {
    expect(isPentagonal(35)).toBe(true);
  });
  test("returns difference of two pentagonian numbers which sum and difference are also pentagonian numbers", () => {
    expect(solution(143)).toBe(40755);
  });
});
