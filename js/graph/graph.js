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
      var edges = start_node.edges;

      start_node.visited = true;

      for (var i = 0, l = start_node.edges.length; i < l; i++) {
        var edge = edges[i];
        var node = edge.nodes.tail;

        if (node.id === destination_node.id) {
          total_value += edge.value;

          // stop walking the graph when a match is found
          // TODO: work out a better solution
          this.visitNodes();

          return total_value;
        }

        if (!node.visited) {
          total_value = edge.value;

          total_value += this.walk(node, destination_node);
        }
      }

      return total_value;
    },

    resetNodes: function() {
      this.nodes.forEach(function(node) {
        node.visited = false;
      });
    },

    visitNodes: function() {
      this.nodes.forEach(function(node) {
        node.visited = true;
      });
    },

    render: function(start_node, destination_node, renderer) {
      start_node.visited = true;

      start_node.edges.forEach(function(edge, i) {
        renderer.line(10 * i, 10 * i, (20 + i) * i, (20 + i) * i);

        var node = edge.nodes.tail;

        if (node.id === destination_node.id) {
          return;
        }

        if (!node.visited) {
          renderer.circle(i, i, 5);
          this.render(node, destination_node, renderer);
        }
      }, this);
    }
};

module.exports = Graph;
