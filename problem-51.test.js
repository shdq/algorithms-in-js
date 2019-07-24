const { solution } = require("./problem-51");

/* eslint max-len: 0 */
describe("Tests for the problem 51: Prime digit replacements", () => {
  test("returns the smallest prime which, by replacing part of the number with the same digit, is part of an eight prime value family", () => {
    expect(solution()).toBe(121313);
  });
});
