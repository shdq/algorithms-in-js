const fs = require("fs");
const names = fs.readFileSync("problem-22-data.txt", "utf-8");

const { alphaValue, totalScore } = require("./problem-22");

describe("Tests for problem 22: Names scores", () => {
  /* eslint max-len: 0 */
  test("returns alphabetical value of a given word", () => {
    expect(alphaValue("COLIN")).toBe(53);
  });

  test("returns total score of all names in the list", () => {
    expect(totalScore(names)).toBe(871198282);
  });
});
