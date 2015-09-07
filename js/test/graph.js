var test = require('tape');
var Graph = require('../src/graph');
var Node = require('../src/node')

var newNode = function(id) {
    var node = new Node();
    node.id = id;

    return node;
}

test("adding a node to another node's adjacency graph", function(t) {
    var graph = new Graph();

    var node1 = newNode(1);
    var node2 = newNode(2);
    var node3 = newNode(3);
    var node4 = newNode(4);

    t.plan(4);

    graph.add(node1, node2);
    graph.add(node1, node3);
    graph.add(node3, node4);

    t.true(graph.isAdjacent(node1, node2), "nodes that have been connected are adjacent");
    t.true(graph.isAdjacent(node3, node4), "nodes that have been connected are adjacent");

    t.false(graph.isAdjacent(node2, node3), "nodes that haven't been connected aren't adjacent");
    t.false(graph.isAdjacent(node1, node4), "adjacency isn't transitive");

    t.end();
});