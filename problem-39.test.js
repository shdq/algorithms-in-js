const { sides, maxPerimeter } = require("./problem-39");

/* eslint max-len: 0 */
describe("Tests for the problem 39: Integer right triangles", () => {
  test("returns amount of solutions for a given perimeter of a right angle triangle", () => {
    expect(sides(120)).toBe(3);
  });

  test("returns perimeter of a right angle triangle with max number of sides() solutions", () => {
    expect(maxPerimeter(150)).toBe(120);
  });
});
