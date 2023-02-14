// Name: Omkar Lohar
// Roll No. : 2201112

// 11.Write a program to implement graph traversals.

class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.adjList = new Map();
  }

  addVertex(vertex) {
    this.adjList.set(vertex, []);
  }

  addEdge(vertex1, vertex2) {
    this.adjList.get(vertex1).push(vertex2);
    this.adjList.get(vertex2).push(vertex1);
  }

  dfs(start) {
    const visited = [];
    for (let i = 0; i < this.numVertices; i++) {
      visited[i] = false;
    }
    this.depthFirstSearch(start, visited);
  }

  depthFirstSearch(vertex, visited) {
    visited[vertex] = true;
    console.log(vertex);
    const neighbors = this.adjList.get(vertex);
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      if (!visited[neighbor]) {
        this.depthFirstSearch(neighbor, visited);
      }
    }
  }

  bfs(start) {
    const visited = [];
    for (let i = 0; i < this.numVertices; i++) {
      visited[i] = false;
    }
    const queue = [];
    visited[start] = true;
    queue.push(start);
    while (queue.length > 0) {
      const vertex = queue.shift();
      console.log(vertex);
      const neighbors = this.adjList.get(vertex);
      for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i];
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }
}
const g = new Graph(4);
const vertices = ["A", "B", "C", "D"];
for (let i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "D");

console.log("DFS:");
g.dfs("A"); // A B D C

console.log("BFS:");
g.bfs("A"); // A B C D
