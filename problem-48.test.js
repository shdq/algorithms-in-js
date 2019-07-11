const { selfPowers } = require("./problem-48");

/* eslint max-len: 0 */
describe("Tests for the problem 48: Self powers", () => {
  test("returns last ten digit or less of the series 1**1 + 2 ** 2 + ... + n ** n", () => {
    expect(selfPowers(10n)).toBe(10405071317n);
  });
});
