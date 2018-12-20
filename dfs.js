function dfs(graph) {
  const spanningTree = [];
  const discovered = [];
  for (let i = 1; i <= graph.size; i++) discovered.push(false);

  function doDFS(v) {
    spanningTree.push(v);
    discovered[v] = true;
    for (const u of graph.adjList.get(v)) {
      if (!discovered[u]) {
        doDFS(u);
      }
    }
  }

  doDFS(1);

  return spanningTree;
}

module.exports = dfs;
