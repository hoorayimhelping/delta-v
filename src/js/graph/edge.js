let Edge = function(value, name) {
  this.value = value;
  this.name = name;

  this.id = name + '-' + value;
  this.nodes = {};
};

Edge.prototype = {
  add: function(source, destination) {
    this.nodes = {};

    this.nodes = {
      head: source,
      tail: destination
    };
  },

  areAdjacent: function(node1, node2) {
    return this.nodes.head.id === node1.id &&
      this.nodes.tail.id === node2.id;
  }
};

module.exports = Edge;
