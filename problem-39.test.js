const { sides } = require("./problem-39");

/* eslint max-len: 0 */
describe("Tests for the problem 39: Integer right triangles", () => {
  test("returns amount of solutions for a given perimeter of a right angle triangle", () => {
    expect(sides(120)).toBe(3);
  });
});
