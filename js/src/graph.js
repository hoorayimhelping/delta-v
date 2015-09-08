var Node = require('./node');
var Edge = require('./edge');

var Graph = function() {
    this.nodes = [];
    this.edges = [];
};

// https://en.wikipedia.org/wiki/Graph_(abstract_data_type)
Graph.prototype = {
    addNode: function(node) {
        this.nodes.push(node);
    },

    addEdge: function(edge, node1, node2) {
        edge.add(node1, node2);
        this.edges.push(edge);
    },

    areAdjacent: function(node1, node2) {
        return this.edges.some(function(edge) {
            return edge.areAdjacent(node1, node2);
        });
    }

    // delete(G, x, y): removes the edge from x to y, if it is there.
    // get_node_value(G, x): returns the value associated with the node x.
    // set_node_value(G, x, a): sets the value associated with the node x to a.
};

module.exports = Graph;