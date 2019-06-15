const { isPalindrom, solution } = require("./problem-36");

/* eslint max-len: 0 */
describe("Tests for the problem 36: Double-base palindromes", () => {
  test("returns true if string is palindrome", () => {
    expect(isPalindrom("level")).toBe(true);
  });

  test("returns the sum of of all numbers, less than one million, which are palindromic in base 10 and base 2", () => {
    expect(solution()).toBe(872187);
  });
});
