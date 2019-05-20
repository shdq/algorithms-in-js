const { diagonalsSum } = require("./problem-28");

/* eslint max-len: 0 */
describe("Tests for problem 28: Number spiral diagonals", () => {
  test("returns sumof the numbers on the diagonals", () => {
    expect(diagonalsSum(5)).toBe(101);
  });
});
