const Graph = require('./graph');

test('returns new graph with 5 vertices', () => {
  const g = new Graph(5);
  expect(g.name).toBe('Graph');
  expect(g.size).toBe(5);
});

test('returns a map of adjacency lists for each vertex', () => {
  const g = new Graph(5);
  g.addEdge(1, 2);
  g.addEdge(2, 3);
  g.addEdge(3, 4);
  g.addEdge(3, 5);
  g.addEdge(4, 5);

  const expected = new Map([
    [1, new Set([2])],
    [2, new Set([1, 3])],
    [3, new Set([2, 4, 5])],
    [4, new Set([3, 5])],
    [5, new Set([3, 4])],
  ]);

  expect(g.adjList).toEqual(expected);
});

test('no dublicate edges in returned graph', () => {
  const g = new Graph(3);
  g.addEdge(1, 2);
  g.addEdge(2, 3);
  g.addEdge(2, 3);
  g.addEdge(2, 3);

  const expected = new Map([
    [1, new Set([2])],
    [2, new Set([1, 3])],
    [3, new Set([2])],
  ]);

  expect(g.adjList).toEqual(expected);
});
