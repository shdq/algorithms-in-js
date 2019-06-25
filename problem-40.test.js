const { solution } = require("./problem-40");

/* eslint max-len: 0 */
describe("Tests for the problem 40: Champernowne's constant", () => {
  test("returns Champernowne's constant", () => {
    expect(solution()).toBe(210);
  });
});
