var describe = require('tape');
var Graph = require('../src/graph');
var Node = require('../src/node');
var Edge = require('../src/edge');

var solar_system = require('../data/solar_system');
var kerbol_system = require('../data/kerbol_system');

describe("checking a graph for adjacency", function(t) {
    t.plan(5);

    var graph = new Graph();

    graph.addEdge(kerbol_system.edges.kerbin_lko, kerbol_system.nodes.kerbin, kerbol_system.nodes.low_kerbin_orbit);
    graph.addEdge(kerbol_system.edges.lko_gto, kerbol_system.nodes.low_kerbin_orbit, kerbol_system.nodes.geostationary_transfer_orbit);
    graph.addEdge(kerbol_system.edges.lko_mun_transfer, kerbol_system.nodes.low_kerbin_orbit, kerbol_system.nodes.mun_transfer);

    t.true(graph.areAdjacent(kerbol_system.nodes.kerbin, kerbol_system.nodes.low_kerbin_orbit));
    t.true(graph.areAdjacent(kerbol_system.nodes.low_kerbin_orbit, kerbol_system.nodes.geostationary_transfer_orbit));
    t.true(graph.areAdjacent(kerbol_system.nodes.low_kerbin_orbit, kerbol_system.nodes.mun_transfer));

    t.false(graph.areAdjacent(kerbol_system.nodes.kerbin, kerbol_system.nodes.geostationary_transfer_orbit));
    t.false(graph.areAdjacent(kerbol_system.nodes.kerbin, kerbol_system.nodes.mun_transfer));

    t.end();
});

describe("walking the graph", function(t) {
    var graph = new Graph();

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