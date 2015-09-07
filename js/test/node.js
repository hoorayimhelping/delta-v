var test = require('tape');
var Node = require('../src/node');

test("adding an adjacent node", function(t) {
    var node = new Node();
    node.id = 1;

    t.plan(1);

    node.add({});
    t.equal(node.neighbors.length, 1);

    t.end();
});