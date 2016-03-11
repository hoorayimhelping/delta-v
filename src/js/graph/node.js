export default class Node {
  constructor(name) {
    this.name = name;
    this.edges = [];
    this.visited = false;
    this.meta = {};
  }

  addMeta = (meta = {}) => {
    this.meta = meta;
    return this;
  };

  addEdge = (edge) => {
    this.edges.push(edge);
  };
}
