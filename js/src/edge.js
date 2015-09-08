var Edge = function(value) {
    this.id = value || new Date().getTime();

    this.nodes = {};
    this.value = value || 0;
};

Edge.prototype = {
    add: function(node1, node2) {
        this.nodes = {};

        this.nodes = {
            head: node1,
            tail: node2
        };
    },

    areAdjacent: function(node1, node2) {
        return this.nodes.head.id === node1.id &&
            this.nodes.tail.id === node2.id;
    }
};

module.exports = Edge;