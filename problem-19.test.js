const countSundays = require("./problem-19");

describe("Tests for problem 19: Counting Sundays", () => {
  /* eslint max-len: 0 */
  test("returns number of Sundays that fell on the first of the month between two dates", () => {
    expect(countSundays("1901-01-01", "2000-12-31")).toBe(171);
  });
});
