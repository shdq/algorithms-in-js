const { isTwiceSquare } = require("./problem-46");

/* eslint max-len: 0 */
describe("Tests for the problem 45: Triangular, pentagonal, and hexagonal", () => {
  test("returns true if twice square of the number is integer", () => {
    expect(isTwiceSquare(4)).toBe(true);
  });
});
