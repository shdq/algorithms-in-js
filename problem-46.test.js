const { isTwiceSquare } = require("./problem-46");

/* eslint max-len: 0 */
describe("Tests for the problem 45: Triangular, pentagonal, and hexagonal", () => {
  test("returns true if square root of the number divided by 2 is integer", () => {
    expect(isTwiceSquare(18)).toBe(true);
  });
});
