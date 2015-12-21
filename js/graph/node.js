var Node = function(id) {
    this.id = id;
    this.edges = [];
    this.visited = false;
};

Node.prototype = {
    addEdge: function(edge) {
        this.edges.push(edge);
    }
};

module.exports = Node;
