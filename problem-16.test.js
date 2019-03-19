const powerSum = require("./problem-16");

describe("Tests for problem 16: Power digit sum", () => {
  /* eslint max-len: 0 */
  test("returns sum of all numbers in the result of 2 to the 15th power", () => {
    expect(powerSum(15)).toBe(26);
  });
});
