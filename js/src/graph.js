var Node = require('./node');

var Graph = function() {
    this.graph = [];
};

// https://en.wikipedia.org/wiki/Graph_(abstract_data_type)
Graph.prototype = {
    add: function(node1, node2) {
        node1.add(node2);
        node2.add(node1);
    },

    isAdjacent: function(node1, node2) {
        return node1.isAdjacentWith(node2) || node2.isAdjacentWith(node1);
    },

    neighbors: function(node) {}
    // : adds to G the edge from x to y, if it is not there.
    // delete(G, x, y): removes the edge from x to y, if it is there.
    // get_node_value(G, x): returns the value associated with the node x.
    // set_node_value(G, x, a): sets the value associated with the node x to a.
};

module.exports = Graph;