const { alphaValue } = require("./problem-22");

describe("Tests for problem 22: Names scores", () => {
  /* eslint max-len: 0 */
  test("returns alphabetical value of a given word", () => {
    expect(alphaValue("COLIN")).toBe(53);
  });
});
