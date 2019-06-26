const { solution } = require("./problem-41");

/* eslint max-len: 0 */
describe("Tests for the problem 41: Pandigital prime", () => {
  test("returns the largest n-digit pandigital prime", () => {
    expect(solution()).toBe(7652413);
  });
});
