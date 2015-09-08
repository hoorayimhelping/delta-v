var Node = function() {
    this.id = new Date().getTime();
};

Node.prototype = {
    toString: function() {
        return this.id;
    }
};

module.exports = Node;