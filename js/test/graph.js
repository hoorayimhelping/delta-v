var test = require('tape');
var Graph = require('../src/graph');
var Node = require('../src/node');
var Edge = require('../src/edge');

var newNode = function(id) {
    var node = new Node();
    node.id = id;

    return node;
};

var newEdge = function(value) {
    return new Edge(value);
};

test("creating a simple delta-v graph of the delta-v graph around kerbin", function(t) {
    // http://i.imgur.com/duY2S.png
    var graph = new Graph();

    var kerbin = newNode('Kerbin');
    var low_kerbin_orbit = newNode('Low Kerbin Orbit');
    var geostationary_transfer_orbit = newNode('GTO');
    var mun_transfer = newNode('Mun Transfer');

    var kerbin_lko = newEdge(3800);
    var lko_gto = newEdge(670);
    var lko_mun_transfer = newEdge(190);

    t.plan(5);

    graph.addNode(kerbin);
    graph.addNode(low_kerbin_orbit);
    graph.addNode(geostationary_transfer_orbit);
    graph.addNode(mun_transfer);

    graph.addEdge(kerbin_lko, kerbin, low_kerbin_orbit);
    graph.addEdge(lko_gto, low_kerbin_orbit, geostationary_transfer_orbit);
    graph.addEdge(lko_mun_transfer, low_kerbin_orbit, mun_transfer);

    t.true(graph.areAdjacent(kerbin, low_kerbin_orbit));
    t.true(graph.areAdjacent(low_kerbin_orbit, geostationary_transfer_orbit));
    t.true(graph.areAdjacent(low_kerbin_orbit, mun_transfer));

    t.false(graph.areAdjacent(kerbin, geostationary_transfer_orbit));
    t.false(graph.areAdjacent(kerbin, mun_transfer));

    t.end();
});