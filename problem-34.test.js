const { serializeFactorials } = require("./problem-34");

/* eslint max-len: 0 */
describe("Tests for the problem 34: Digit factorials", () => {
  test("returns value of 8! from serialized array of factorials", () => {
    expect(serializeFactorials()[8]).toBe(40320);
  });
});
