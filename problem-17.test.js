const countLetters = require("./problem-17");

describe("Tests for problem 17: Number letter counts", () => {
  /* eslint max-len: 0 */
  test("returns number of letters in written words from 1 to 5", () => {
    expect(countLetters(5)).toBe(19);
  });
  test("returns number of letters in written words from 1 to 1000", () => {
    expect(countLetters(1000)).toBe(21124);
  });
});
