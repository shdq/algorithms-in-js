const { permutations } = require("./problem-24");

describe("Tests for problem 24: Lexicographic permutations", () => {
  /* eslint max-len: 0 */
  test("returns lexicographic permutation of a given sequence on certain position", () => {
    expect(permutations([0, 1, 2], 5)).toBe(201);
  });
});
