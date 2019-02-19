const sequence = require("./problem-14");

describe("Tests for problem 14: Longest Collatz sequence", () => {
  /* eslint max-len: 0 */
  test("returns a length of a sequence", () => {
    expect(sequence(13)).toBe(10);
  });
});
