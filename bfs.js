function bfs(graph, vertex = 1) {
  const spanningTree = [vertex];
  const discovered = [];
  for (let i = 1; i <= graph.size; i++) discovered.push(false);
  discovered[vertex] = true;

  const queue = [];
  queue.push(vertex);

  while (queue.length > 0) {
    const currentVertex = queue.shift();

    const adjList = graph.adjList.get(currentVertex);
    console.log(adjList);

    for (let neighbour of adjList) {
      if (!discovered[neighbour]) {
        discovered[neighbour] = true;
        spanningTree.push(neighbour);
        queue.push(neighbour);
      }
    }
  }
  return spanningTree;
}

module.exports = bfs;
