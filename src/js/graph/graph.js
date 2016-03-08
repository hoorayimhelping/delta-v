export default class Graph {
  constructor() {
    this.edges = [];
    this.nodes = [];
  }

  addEdge = (edge, head_node, tail_node) => {
    edge.add(head_node, tail_node);

    this.nodes.push(head_node, tail_node);

    head_node.addEdge(edge);
    tail_node.addEdge(edge);

    this.edges.push(edge);
  };

  walk = (startNode, destinationNode) => {
    let totalValue = 0;
    let edges = startNode.edges;

    startNode.visited = true;

    for (let i = 0, l = startNode.edges.length; i < l; i++) {
      let edge = edges[i];
      let node = edge.nodes.tail;

      if (node.name === destinationNode.name) {
        // stop walking the graph when a match is found
        // TODO: work out a better solution
        this.visitNodes();

        return edge.value;
      }

      if (!node.visited) {
        totalValue = edge.value;

        totalValue += this.walk(node, destinationNode);
      }
    }

    return totalValue;
  };

  resetNodes = () => {
    this.nodes.forEach(node => {
      node.visited = false;
    });
  };

  visitNodes = () => {
    this.nodes.forEach(node => {
      node.visited = true;
    });
  };

  render = (startNode, destinatinNode, renderer) => {
    startNode.visited = true;

    startNode.edges.forEach((edge, i) => {
      renderer.line(10 * i, 10 * i, (20 + i) * i, (20 + i) * i);

      let node = edge.nodes.tail;

      if (node.name === destinatinNode.name) {
        return;
      }

      if (!node.visited) {
        renderer.circle(i, i, 5);
        this.render(node, destinatinNode, renderer);
      }
    }, this);
  };
};
