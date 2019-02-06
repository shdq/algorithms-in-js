class Graph {
  constructor(size) {
    this.name = "Graph";
    this.size = size;
    this.adjList = new Map();
    for (let i = 1; i <= size; i++) {
      this.adjList.set(i, new Set());
    }
  }

  addEdge(from, to) {
    this.adjList.get(from).add(to);
    this.adjList.get(to).add(from);
  }

  print() {
    for (const [vertex, list] of this.adjList) {
      console.log(`Vertex ${vertex} adjacency list: ${[...list]}`);
    }
  }
}

module.exports = Graph;
