var describe = require('tape');
var Graph = require('../src/graph');
var Node = require('../src/node');
var Edge = require('../src/edge');

var solar_system = require('../data/solar_system');

var newNode = function(id) {
    var node = new Node();
    node.id = id;

    return node;
};

var newEdge = function(options) {
    return new Edge(options.deltav, options.name);
};

describe("walking the graph", function(t) {
    var graph = new Graph();

    describe("walking a simple linear graph", function(t) {
        t.plan(5);

        // values taken from http://i.imgur.com/duY2S.png
        var kerbin = newNode('Kerbin');
        var low_kerbin_orbit = newNode('Low Kerbin Orbit');
        var geostationary_transfer_orbit = newNode('GTO');
        var mun_transfer = newNode('Mun Transfer');

        var kerbin_lko = newEdge({ deltav: 3800, name: 'kerbin-lko' });
        var lko_gto = newEdge({ deltav: 670, name: 'lko-gto' });
        var lko_mun_transfer = newEdge({ deltav: 190, name: 'lko-mun_transfer' });

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

    describe("walking a graph with three branches", function(t) {
        t.plan(1);

        graph.addEdge(solar_system.edges.low_earth_orbit, solar_system.nodes.earth, solar_system.nodes.leo);

        graph.addEdge(solar_system.edges.leo_geo_transfer, solar_system.nodes.leo, solar_system.nodes.geo_transfer);
        graph.addEdge(solar_system.edges.geo_transfer_geo_orbit, solar_system.nodes.geo_transfer, solar_system.nodes.geostationary);

        graph.addEdge(solar_system.edges.leo_moon_transfer, solar_system.nodes.leo, solar_system.nodes.moon_transfer);
        graph.addEdge(solar_system.edges.moon_transfer_lmo, solar_system.nodes.moon_transfer, solar_system.nodes.low_moon_orbit);

        graph.addEdge(solar_system.edges.leo_earth_escape, solar_system.nodes.leo, solar_system.nodes.earth_escape);
        graph.addEdge(solar_system.edges.earth_escape_mars_transfer, solar_system.nodes.earth_escape, solar_system.nodes.mars_transfer);

        var total_value = graph.walk(solar_system.nodes.earth, solar_system.nodes.mars_transfer);

        t.equals(total_value, solar_system.edges.low_earth_orbit.value + solar_system.edges.leo_earth_escape.value + solar_system.edges.earth_escape_mars_transfer.value);
        t.end();
    });

    t.end();
});