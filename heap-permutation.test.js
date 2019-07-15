const permutate = require("./heap-permutation");

/* eslint max-len: 0 */
describe("Tests for Heap's algorithm", () => {
  test("returns penragonal numbers up to a given amount", () => {
    expect(permutate([1, 2, 3])).toEqual(
      expect.arrayContaining([123, 213, 321, 231, 312, 132])
    );
  });
});
