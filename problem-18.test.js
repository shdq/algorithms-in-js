const pathSum = require("./problem-18");

describe("Tests for problem 18: Maximum path sum I", () => {
  const triangle = `3
7 4
2 4 6
8 5 9 3`;
  test("returns number of letters in written words from 1 to 5", () => {
    expect(pathSum(triangle)).toBe(23);
  });
});
