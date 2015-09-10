var Node = function(options) {
    this.props = options || {};

    this.id = new Date().getTime();
    this.edges = [];
    this.visited = false;
};

Node.prototype = {
    addEdge: function(edge) {
        this.edges.push(edge);
    }
};

module.exports = Node;