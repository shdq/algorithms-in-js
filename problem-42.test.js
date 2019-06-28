const { isTriangle } = require("./problem-42");

/* eslint max-len: 0 */
describe("Tests for the problem 42: Coded triangle numbers", () => {
  test("returns true if a given number is triangle number", () => {
    expect(isTriangle(55)).toBe(true);
  });
});
