const Graph = require('./graph');

/* eslint max-len: 0 */
test('returns new graph with 5 vertices', () => {
  const g = new Graph(5);
  expect(g.name).toBe('Graph');
  expect(g.size).toBe(5);
});