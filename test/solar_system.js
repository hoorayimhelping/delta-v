var Graph = require('../js/graph/graph');
var Node = require('../js/graph/node');
var Edge = require('../js/graph/edge');

var solar_system = require('../js/maps/solar_system');

describe("one-way trips from earth", function() {
  var edges = solar_system.edges;
  var nodes = solar_system.nodes;

  var graph = new Graph();
  solar_system.buildGraph(graph, edges, nodes);

  afterEach(function() {
    solar_system.unwalkNodes();
  });

  it("calculates the delta-v to geostationary orbit", function() {
    var total_value = graph.walk(nodes.earth, nodes.geostationary);
    var expected_value = edges.low_earth_orbit.value +
      edges.leo_geo_transfer.value +
      edges.geo_transfer_geo_orbit.value;

    expect(total_value).to.equal(expected_value);
  });

  describe("to lunar space", function() {
    var earth_to_low_lunar_orbit_delta_v = edges.low_earth_orbit.value +
      edges.leo_moon_transfer.value +
      edges.moon_transfer_lmo.value;

    it("calulates the delta-v to lunar orbit", function() {
      var total_value = graph.walk(nodes.earth, nodes.low_moon_orbit);

      expect(total_value).to.equal(earth_to_low_lunar_orbit_delta_v);
    });

    it("calculates the delta-v to a lunar surface landing", function() {
      var total_value = graph.walk(nodes.earth, nodes.moon);

      expect(total_value).to.equal(earth_to_low_lunar_orbit_delta_v + edges.moon_landing.value);
    });
  });

  describe("to martian space", function() {
    it("calculates the delta-v to mars transfer orbit", function() {
      var total_value = graph.walk(nodes.earth, nodes.mars_transfer);
      var expected_value = edges.low_earth_orbit.value +
        edges.leo_earth_transfer.value +
        edges.earth_transfer_mars_transfer.value;

      expect(total_value).to.equal(expected_value);
    });

    describe("to deimos space", function() {
      it("calculates the delta-v to low deimos orbit", function() {
        var total_value = graph.walk(nodes.earth, nodes.low_deimos_orbit);

        var expected_value = edges.low_earth_orbit.value +
          edges.leo_earth_transfer.value +
          edges.earth_transfer_mars_transfer.value +
          edges.mars_transfer_deimos_transfer.value +
          edges.deimos_transfer_low_deimos_orbit.value;

        expect(total_value).to.equal(expected_value);
      });

      it("calculates the delta-v to a deimos landing", function() {
        var total_value = graph.walk(nodes.earth, nodes.deimos);

        var expected_value = edges.low_earth_orbit.value +
          edges.leo_earth_transfer.value +
          edges.earth_transfer_mars_transfer.value +
          edges.mars_transfer_deimos_transfer.value +
          edges.deimos_transfer_low_deimos_orbit.value +
          edges.deimos_landing.value;

        expect(total_value).to.equal(expected_value);
      });

      describe("to phobos space", function() {
        it("calculates the delta-v to low phobos orbit", function() {
          var total_value = graph.walk(nodes.earth, nodes.low_phobos_orbit);

          var expected_value = edges.low_earth_orbit.value +
            edges.leo_earth_transfer.value +
            edges.earth_transfer_mars_transfer.value +
            edges.mars_transfer_phobos_transfer.value +
            edges.phobos_transfer_low_phobos_orbit.value;

          expect(total_value).to.equal(expected_value);
        });

        it("calculates the delta-v to a phobos landing", function() {
          var total_value = graph.walk(nodes.earth, nodes.phobos);

          var expected_value = edges.low_earth_orbit.value +
            edges.leo_earth_transfer.value +
            edges.earth_transfer_mars_transfer.value +
            edges.mars_transfer_phobos_transfer.value +
            edges.phobos_transfer_low_phobos_orbit.value +
            edges.phobos_landing.value;

          expect(total_value).to.equal(expected_value);
        });
      });
    });
  });
});
