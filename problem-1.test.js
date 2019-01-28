const multiplies = require("./problem-1");

describe("Tests for problem 1: Multiples of 3 and 5", () => {
  /* eslint max-len: 0 */
  test("should be return sum of all multiples of 3 and 5", () => {
    expect(multiplies(10)).toEqual(23);

    expect(multiplies(1000)).toEqual(233168);
  });
});
