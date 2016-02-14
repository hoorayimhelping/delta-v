export default class Node {
  constructor(name) {
    this.name = name;
    this.edges = [];
    this.visited = false;
  }

  addEdge = (edge) => {
    this.edges.push(edge);
  };
}
