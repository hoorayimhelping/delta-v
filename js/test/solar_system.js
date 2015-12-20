var describe = require('tape');
var Graph = require('../graph/graph');
var Node = require('../graph/node');
var Edge = require('../graph/edge');

var solar_system = require('../maps/solar_system');

describe("walking the solar system from earth", function(t) {
  var edges = solar_system.edges;
  var nodes = solar_system.nodes;

  var graph = new Graph();
  solar_system.buildGraph(graph, edges, nodes);

  describe("earth to geostationary orbit", function(t) {
    t.plan(1);

    solar_system.unwalkNodes();
    var total_value = graph.walk(nodes.earth, nodes.geostationary);
    var expected_value = edges.low_earth_orbit.value +
      edges.leo_geo_transfer.value +
      edges.geo_transfer_geo_orbit.value;

    t.equals(total_value, expected_value);
    t.end();
  });

  describe("earth to mars transfer orbit", function(t) {
    t.plan(1);

    solar_system.unwalkNodes();
    var total_value = graph.walk(nodes.earth, nodes.mars_transfer);
    var expected_value = edges.low_earth_orbit.value +
      edges.leo_earth_transfer.value +
      edges.earth_transfer_mars_transfer.value;

    t.equals(total_value, expected_value);
    t.end();
  });

  describe("earth to deimos", function(t) {
    t.plan(1);

    solar_system.unwalkNodes();
    var total_value = graph.walk(nodes.earth, nodes.deimos);

    var expected_value = edges.low_earth_orbit.value +
      edges.leo_earth_transfer.value +
      edges.earth_transfer_mars_transfer.value +
      edges.mars_transfer_deimos_transfer.value +
      edges.deimos_transfer_low_deimos_orbit.value +
      edges.deimos_landing.value;

    t.equals(total_value, expected_value);

    t.end();
  });

  t.end();
});
