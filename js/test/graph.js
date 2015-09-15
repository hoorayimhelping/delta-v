var describe = require('tape');
var Graph = require('../graph/graph');
var Node = require('../graph/node');
var Edge = require('../graph/edge');

var solar_system = require('../maps/solar_system');
var kerbol_system = require('../maps/kerbol_system');

var buildSolarSystemGraph = function(graph, edges, nodes) {
    graph.addEdge(edges.low_earth_orbit, nodes.earth, nodes.leo);

    graph.addEdge(edges.leo_geo_transfer, nodes.leo, nodes.geo_transfer);
    graph.addEdge(edges.geo_transfer_geo_orbit, nodes.geo_transfer, nodes.geostationary);

    graph.addEdge(edges.leo_moon_transfer, nodes.leo, nodes.moon_transfer);
    graph.addEdge(edges.moon_transfer_lmo, nodes.moon_transfer, nodes.low_moon_orbit);

    graph.addEdge(edges.leo_earth_transfer, nodes.leo, nodes.earth_transfer);
    graph.addEdge(edges.earth_transfer_mars_transfer, nodes.earth_transfer, nodes.mars_transfer);

    graph.addEdge(edges.mars_transfer_deimos_transfer, nodes.mars_transfer, nodes.deimos_transfer);
    graph.addEdge(edges.deimos_transfer_low_deimos_orbit, nodes.deimos_transfer, nodes.low_deimos_orbit);
    graph.addEdge(edges.low_deimos_orbit_deimos, nodes.low_deimos_orbit, nodes.deimos);
};

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
    var edges = solar_system.edges;
    var nodes = solar_system.nodes;

    var graph = new Graph();
    buildSolarSystemGraph(graph, edges, nodes);

    describe("walking the solar system delta v graph from earth to mars transfer orbit", function(t) {
        t.plan(1);

        solar_system.unwalkNodes();
        var total_value = graph.walk(nodes.earth, nodes.mars_transfer);
        var expected_value = edges.low_earth_orbit.value +
                edges.leo_earth_transfer.value +
                edges.earth_transfer_mars_transfer.value;

        t.equals(
            total_value,
            expected_value
        );
        t.end();
    });

    describe("walking the solar system delta v graph from earth to deimos", function(t) {
        t.plan(1);

        solar_system.unwalkNodes();
        var total_value = graph.walk(nodes.earth, nodes.deimos);

        var expected_value = edges.low_earth_orbit.value +
                edges.leo_earth_transfer.value +
                edges.earth_transfer_mars_transfer.value +
                edges.mars_transfer_deimos_transfer.value + 
                edges.deimos_transfer_low_deimos_orbit.value +
                edges.low_deimos_orbit_deimos.value;

        t.equals(
            total_value,
            expected_value
        );
        
        t.end();
    });

    t.end();
});