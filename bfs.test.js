const Graph = require("./graph");
const bfs = require("./bfs");

const g = new Graph(7);

g.addEdge(1, 2);
g.addEdge(2, 3);
g.addEdge(3, 4);
g.addEdge(3, 5);
g.addEdge(4, 5);
g.addEdge(1, 6);
g.addEdge(1, 7);

test("return spanning tree for a given graph", () => {
  expect(bfs(g)).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

test("return spanning tree started with particular vertex", () => {
  expect(bfs(g, 5)).toEqual([5, 3, 2, 1, 6, 7, 4]);
});
