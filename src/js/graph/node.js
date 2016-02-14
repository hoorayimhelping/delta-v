export default class Node {
  constructor(id) {
    this.id = id;
    this.edges = [];
    this.visited = false;
  }

  addEdge = (edge) => {
    this.edges.push(edge);
  };
}
