const { isPalindrom } = require("./problem-36");

/* eslint max-len: 0 */
describe("Tests for the problem 36: Double-base palindromes", () => {
  test("returns true if string is palindrome", () => {
    expect(isPalindrom("level")).toBe(true);
  });
});
