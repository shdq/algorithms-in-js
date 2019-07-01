const solution = require("./problem-43");

/* eslint max-len: 0 */
describe("Tests for the problem 43: Sub-string divisibility", () => {
  test("returns the sum of all 0-9 pandigital numbers with sub-string divisibility property", () => {
    expect(solution()).toBe(16695334890);
  });
});
