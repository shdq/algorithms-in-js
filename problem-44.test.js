const { genPentagonal } = require("./problem-44");

/* eslint max-len: 0 */
describe("Tests for the problem 44: Pentagon numbers", () => {
  test("returns penragonal numbers up to a given amount", () => {
    expect(genPentagonal(10)).toEqual(expect.arrayContaining([1, 5, 12, 22, 35, 51, 70, 92, 117, 145]));
  });
});
