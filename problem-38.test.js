const { multiples } = require("./problem-38");

/* eslint max-len: 0 */
describe("Tests for the problem 38: Pandigital multiples", () => {
  test("returns the largest 1 to 9 pandigital number that can be formed as the concatenated product of an integer and (1, 2..n)", () => {
    expect(multiples()).toBe(932718654);
  });
});
