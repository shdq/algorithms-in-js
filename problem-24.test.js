const { swap, nextPermutation, permutations } = require("./problem-24");

describe("Tests for problem 24: Lexicographic permutations", () => {
  /* eslint max-len: 0 */
  test("returns lexicographic permutation of a given sequence on certain position", () => {
    expect(permutations([0, 1, 2], 5)).toEqual([2, 0, 1]);
  });

  test("swaps positions of the elements of a given array", () => {
    expect(swap([1, 2, 3, 4], 1, 2)).toEqual([1, 3, 2, 4]);
  });

  test("returns next permutation for a given sequence", () => {
    expect(nextPermutation([0, 2, 3, 1])).toEqual([0, 3, 1, 2]);
  });
});
