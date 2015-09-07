var Node = function() {
    this.id = new Date().getTime();
    this.neighbors = [];
};

Node.prototype = {
    add: function(node) {
        this.neighbors.push(node);
    },

    isAdjacentWith: function(node) {
        return this.neighbors.some(function(current_node) {
            return current_node.id === node.id;
        });
    }
};

module.exports = Node;