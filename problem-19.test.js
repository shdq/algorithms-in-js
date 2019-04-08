const countSundays = require("./problem-19");

describe("Tests for problem 19: Counting Sundays", () => {
  /* eslint max-len: 0 */
  test("returns number of Sundays between two dates", () => {
    expect(countSundays("2019-01-01", "2019-03-31")).toBe(13);
  });
});
