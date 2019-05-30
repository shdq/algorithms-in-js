const { change } = require("./problem-31");

/* eslint max-len: 0 */
describe("Tests for problem 31: Coin sums", () => {
  test("returns number of options to get the sum with any number of given coins", () => {
    expect(change([1, 2, 5, 10], 10)).toBe(11);
  });
});
