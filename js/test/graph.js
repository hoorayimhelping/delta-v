var describe = require('tape');
var Graph = require('../src/graph');
var Node = require('../src/node');
var Edge = require('../src/edge');

var solar_system = require('../data/solar_system');
var kerbol_system = require('../data/kerbol_system');

describe("checking a graph for adjacency", function(t) {
    t.plan(5);

    var graph = new Graph();
    var edges = kerbol_system.edges;
    var nodes = kerbol_system.nodes;

    graph.addEdge(edges.kerbin_lko, nodes.kerbin, nodes.low_kerbin_orbit);
    graph.addEdge(edges.lko_gto, nodes.low_kerbin_orbit, nodes.geostationary_transfer_orbit);
    graph.addEdge(edges.lko_mun_transfer, nodes.low_kerbin_orbit, nodes.mun_transfer);

    t.true(graph.areAdjacent(nodes.kerbin, nodes.low_kerbin_orbit));
    t.true(graph.areAdjacent(nodes.low_kerbin_orbit, nodes.geostationary_transfer_orbit));
    t.true(graph.areAdjacent(nodes.low_kerbin_orbit, nodes.mun_transfer));

    t.false(graph.areAdjacent(nodes.kerbin, nodes.geostationary_transfer_orbit));
    t.false(graph.areAdjacent(nodes.kerbin, nodes.mun_transfer));

    t.end();
});

describe("walking the graph", function(t) {
    var graph = new Graph();
    var edges = solar_system.edges;
    var nodes = solar_system.nodes;

    describe("walking a graph with three branches", function(t) {
        t.plan(1);

        graph.addEdge(edges.low_earth_orbit, nodes.earth, nodes.leo);

        graph.addEdge(edges.leo_geo_transfer, nodes.leo, nodes.geo_transfer);
        graph.addEdge(edges.geo_transfer_geo_orbit, nodes.geo_transfer, nodes.geostationary);

        graph.addEdge(edges.leo_moon_transfer, nodes.leo, nodes.moon_transfer);
        graph.addEdge(edges.moon_transfer_lmo, nodes.moon_transfer, nodes.low_moon_orbit);

        graph.addEdge(edges.leo_earth_transfer, nodes.leo, nodes.earth_transfer);
        graph.addEdge(edges.earth_transfer_mars_transfer, nodes.earth_transfer, nodes.mars_transfer);

        var total_value = graph.walk(nodes.earth, nodes.mars_transfer);

        t.equals(total_value, edges.low_earth_orbit.value + edges.leo_earth_transfer.value + edges.earth_transfer_mars_transfer.value);
        t.end();
    });

    t.end();
});