var Node = require('./node');
var Edge = require('./edge');

var Graph = function() {
    this.edges = [];
};

// https://en.wikipedia.org/wiki/Graph_(abstract_data_type)
Graph.prototype = {
    addEdge: function(edge, head_node, tail_node) {
        edge.add(head_node, tail_node);

        head_node.addEdge(edge);
        tail_node.addEdge(edge);

        this.edges.push(edge);
    },

    areAdjacent: function(head_node, tail_node) {
        return this.edges.some(function(edge) {
            return edge.areAdjacent(head_node, tail_node);
        });
    },

    // depth first search
    walk: function(head_node, final_node) {
        var current_node = head_node;
        var total_value = 0;

        current_node.visited = true;

        current_node.edges.forEach(function(edge) {
            var node = edge.nodes.tail;

            if (!node.visited) {
                total_value = edge.props.deltav;

                total_value += this.walk(node, final_node);
            }
        }, this);

        return total_value;
    }

    // delete(G, x, y): removes the edge from x to y, if it is there.
    // get_node_value(G, x): returns the value associated with the node x.
    // set_node_value(G, x, a): sets the value associated with the node x to a.
};

module.exports = Graph;