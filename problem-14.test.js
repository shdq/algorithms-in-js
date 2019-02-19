const { sequence, longestSeq } = require("./problem-14");

describe("Tests for problem 14: Longest Collatz sequence", () => {
  test("returns a length of a sequence", () => {
    expect(sequence(13)).toBe(10);
  });
  /* eslint max-len: 0 */
  test("returns number below one million with the longest Collatz sequence", () => {
    expect(longestSeq()).toBe(837799);
  });
});
