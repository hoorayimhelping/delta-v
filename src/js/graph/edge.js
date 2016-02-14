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
  }
};

module.exports = Edge;
