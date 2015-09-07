var test = require('tape');
var Node = require('../src/node');

test("adding an adjacent node", function(t) {
    var node = new Node();

    t.plan(1);

    node.add({});
    t.equal(node.neighbors.length, 1);

    t.end();
});

test("node adjacency", function(t) {
    var node = new Node();
    t.plan(2);

    var other_node = new Node();
    other_node.id = 1;

    node.add(other_node);
    t.true(node.contains(other_node), "returns true when the node is adjacent with this node");

    var yet_another_node = new Node();

    t.false(node.contains(yet_another_node), "returns false when the node is not adjacent with this node");

    t.end();
});