var Node = require('./node');
var Edge = require('./edge');

var Graph = function() {
    this.edges = [];
    this.nodes = [];
};

Graph.prototype = {
    addEdge: function(edge, head_node, tail_node) {
        edge.add(head_node, tail_node);

        this.nodes.push(head_node, tail_node);

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
    walk: function(start_node, destination_node) {
        var total_value = 0;

        start_node.visited = true;

        start_node.edges.forEach(function(edge) {
            var node = edge.nodes.tail;

            if (node.id === destination_node.id) {
                total_value += edge.value;
                return;
            }

            if (!node.visited) {
                total_value = edge.value;

                total_value += this.walk(node, destination_node);
            }
        }, this);

        return total_value;
    },

    resetNodes: function() {
        this.nodes.forEach(function(node) {
            node.visited = false;
        });
    }
};

module.exports = Graph;