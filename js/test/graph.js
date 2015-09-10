var describe = require('tape');
var Graph = require('../src/graph');
var Node = require('../src/node');
var Edge = require('../src/edge');

var newNode = function(id) {
    var node = new Node();
    node.id = id;

    return node;
};

var newEdge = function(options) {
    return new Edge(options);
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

        // values taken from http://i.imgur.com/SqdzxzF.png
        var earth = newNode('Earth');
        var leo = newNode('Low Earth Orbit');
        var geo_transfer = newNode('Geostationary Transfer');
        var geostationary = newNode('Geostationary Orbit');
        var moon_transfer = newNode('Moon Transfer');
        var low_moon_orbit = newNode('Low Moon Orbit');
        var earth_escape = newNode('Earth Escape');
        var mars_transfer = newNode('Mars Transfer');

        var low_earth_orbit = newEdge({ deltav: 9400, name: 'low_earth_orbit' });

        var leo_geo_transfer = newEdge({ deltav: 2440, name: 'leo-geo_transfer' });
        var geo_transfer_geo_orbit = newEdge({ deltav: 1470, name: 'geostationary_transfer-geostationary_orbit' });

        var leo_moon_transfer = newEdge({ deltav: 3260, name: 'leo-moon_transfer' });
        var moon_transfer_lmo = newEdge({ deltav: 680, name: 'moon_transfer-low_moon_orbit' });

        var leo_earth_escape = newEdge({ deltav: 3210, name: 'leo-earth_escape' });

        var earth_escape_mars_transfer = newEdge({ deltav: 390, name: 'earth_escape-mars_transfer' });

        graph.addEdge(low_earth_orbit, earth, leo);

        graph.addEdge(leo_geo_transfer, leo, geo_transfer);
        graph.addEdge(geo_transfer_geo_orbit, geo_transfer, geostationary);

        graph.addEdge(leo_moon_transfer, leo, moon_transfer);
        graph.addEdge(moon_transfer_lmo, moon_transfer, low_moon_orbit);

        graph.addEdge(leo_earth_escape, leo, earth_escape);
        graph.addEdge(earth_escape_mars_transfer, earth_escape, mars_transfer);

        var total_value = graph.walk(earth, mars_transfer);

        t.equals(total_value, low_earth_orbit.props.deltav + leo_earth_escape.props.deltav + earth_escape_mars_transfer.props.deltav);
        t.end();
    });

    t.end();
});