const routes = require("./problem-15");

describe("Tests for problem 15: Lattice paths", () => {
  /* eslint max-len: 0 */
  test("returns number of routes for a given grid size", () => {
    expect(routes(2)).toBe(6);
  });
});
