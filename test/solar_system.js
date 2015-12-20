var Graph = require('../js/graph/graph');
var Node = require('../js/graph/node');
var Edge = require('../js/graph/edge');

var solar_system = require('../js/maps/solar_system');

describe("walking the solar system from earth", function() {
  var edges = solar_system.edges;
  var nodes = solar_system.nodes;

  var graph = new Graph();
  solar_system.buildGraph(graph, edges, nodes);

  it("calculates the delta-v to geostationary orbit", function() {
    solar_system.unwalkNodes();
    var total_value = graph.walk(nodes.earth, nodes.geostationary);
    var expected_value = edges.low_earth_orbit.value +
      edges.leo_geo_transfer.value +
      edges.geo_transfer_geo_orbit.value;

    expect(total_value).to.equal(expected_value);
  });

  it("calculates the delta-v to mars transfer orbit", function() {
    solar_system.unwalkNodes();
    var total_value = graph.walk(nodes.earth, nodes.mars_transfer);
    var expected_value = edges.low_earth_orbit.value +
      edges.leo_earth_transfer.value +
      edges.earth_transfer_mars_transfer.value;

    expect(total_value).to.equal(expected_value);
  });

  it("calculates the delta-v to deimos", function() {
    solar_system.unwalkNodes();
    var total_value = graph.walk(nodes.earth, nodes.deimos);

    var expected_value = edges.low_earth_orbit.value +
      edges.leo_earth_transfer.value +
      edges.earth_transfer_mars_transfer.value +
      edges.mars_transfer_deimos_transfer.value +
      edges.deimos_transfer_low_deimos_orbit.value +
      edges.deimos_landing.value;

    expect(total_value).to.equal(expected_value);
  });

});
