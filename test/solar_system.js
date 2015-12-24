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
    var total_value = graph.walk(nodes.earth, nodes.geostationary_orbit);
    var expected_value = edges.low_earth_orbit.value +
      edges.low_earth_orbit_geostationary_transfer.value +
      edges.geostationary_transfer_geo_orbit.value;

    expect(total_value).to.equal(expected_value);
  });

  describe("to lunar space", function() {
    var earth_to_low_lunar_orbit_delta_v = edges.low_earth_orbit.value +
      edges.low_earth_orbit_moon_transfer.value +
      edges.moon_transfer_low_moon_orbit.value;

    it("calulates the delta-v to lunar orbit", function() {
      var total_value = graph.walk(nodes.earth, nodes.low_moon_orbit);

      expect(total_value).to.equal(earth_to_low_lunar_orbit_delta_v);
    });

    it("calculates the delta-v to a lunar surface landing", function() {
      var total_value = graph.walk(nodes.earth, nodes.moon);

      expect(total_value).to.equal(earth_to_low_lunar_orbit_delta_v + edges.low_moon_orbit_moon_landing.value);
    });
  });

  describe("to venutian space", function() {
    it("calculates the delta-v to venus transfer orbit", function() {
      var total_value = graph.walk(nodes.earth, nodes.venus_transfer);
      var expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_venus_transfer.value;

      expect(total_value).to.equal(expected_value);
    });

    it("calculates the delta-v to low venus orbit", function() {
      var total_value = graph.walk(nodes.earth, nodes.low_venus_orbit);
      var expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_venus_transfer.value +
        edges.venus_transfer_low_venus_orbit.value;

      expect(total_value).to.equal(expected_value);
    });

    it("calculates the delta-v to a venus landing", function() {
      var total_value = graph.walk(nodes.earth, nodes.venus);
      var expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_venus_transfer.value +
        edges.venus_transfer_low_venus_orbit.value +
        edges.low_venus_orbit_venus_landing.value;

      expect(total_value).to.equal(expected_value);
    });
  });

  describe("to mercurian space", function() {
    it("calculates the delta-v to mercury transfer orbit", function() {
      var total_value = graph.walk(nodes.earth, nodes.mercury_transfer);
      var expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_mercury_transfer.value;

      expect(total_value).to.equal(expected_value);
    });

    it("calculates the delta-v to low mercury orbit", function() {
      var total_value = graph.walk(nodes.earth, nodes.low_mercury_orbit);
      var expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_mercury_transfer.value +
        edges.mercury_transfer_low_mercury_orbit.value;

      expect(total_value).to.equal(expected_value);
    });

    it("calculates the delta-v to a mercury landing", function() {
      var total_value = graph.walk(nodes.earth, nodes.mercury);
      var expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_mercury_transfer.value +
        edges.mercury_transfer_low_mercury_orbit.value +
        edges.low_mercury_orbit_mercury_landing.value;

      expect(total_value).to.equal(expected_value);
    });
  });

  describe("to martian space", function() {
    it("calculates the delta-v to mars transfer orbit", function() {
      var total_value = graph.walk(nodes.earth, nodes.mars_transfer);
      var expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_mars_transfer.value;

      expect(total_value).to.equal(expected_value);
    });

    it("calculates the delta-v to low mars orbit", function() {
      var total_value = graph.walk(nodes.earth, nodes.low_mars_orbit);
      var expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_mars_transfer.value +
        edges.mars_transfer_low_mars_orbit.value;

      expect(total_value).to.equal(expected_value);
    });

    it("calculates the delta-v to a mars landing", function() {
      var total_value = graph.walk(nodes.earth, nodes.mars);
      var expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_mars_transfer.value +
        edges.mars_transfer_low_mars_orbit.value +
        edges.low_mars_orbit_mars_landing.value;

      expect(total_value).to.equal(expected_value);
    });

    describe("to deimos space", function() {
      it("calculates the delta-v to low deimos orbit", function() {
        var total_value = graph.walk(nodes.earth, nodes.low_deimos_orbit);

        var expected_value = edges.low_earth_orbit.value +
          edges.low_earth_orbit_earth_transfer.value +
          edges.earth_transfer_mars_transfer.value +
          edges.mars_transfer_deimos_transfer.value +
          edges.deimos_transfer_low_deimos_orbit.value;

        expect(total_value).to.equal(expected_value);
      });

      it("calculates the delta-v to a deimos landing", function() {
        var total_value = graph.walk(nodes.earth, nodes.deimos);

        var expected_value = edges.low_earth_orbit.value +
          edges.low_earth_orbit_earth_transfer.value +
          edges.earth_transfer_mars_transfer.value +
          edges.mars_transfer_deimos_transfer.value +
          edges.deimos_transfer_low_deimos_orbit.value +
          edges.low_deimos_orbit_deimos_landing.value;

        expect(total_value).to.equal(expected_value);
      });

      describe("to phobos space", function() {
        it("calculates the delta-v to low phobos orbit", function() {
          var total_value = graph.walk(nodes.earth, nodes.low_phobos_orbit);

          var expected_value = edges.low_earth_orbit.value +
            edges.low_earth_orbit_earth_transfer.value +
            edges.earth_transfer_mars_transfer.value +
            edges.mars_transfer_phobos_transfer.value +
            edges.phobos_transfer_low_phobos_orbit.value;

          expect(total_value).to.equal(expected_value);
        });

        it("calculates the delta-v to a phobos landing", function() {
          var total_value = graph.walk(nodes.earth, nodes.phobos);

          var expected_value = edges.low_earth_orbit.value +
            edges.low_earth_orbit_earth_transfer.value +
            edges.earth_transfer_mars_transfer.value +
            edges.mars_transfer_phobos_transfer.value +
            edges.phobos_transfer_low_phobos_orbit.value +
            edges.low_phobos_orbit_phobos_landing.value;

          expect(total_value).to.equal(expected_value);
        });
      });
    });
  });

  describe("to jovian space", function() {
    it("calculates the delta-v to jupiter transfer orbit", function() {
      var total_value = graph.walk(nodes.earth, nodes.jupiter_transfer);
      var expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_jupiter_transfer.value;

      expect(total_value).to.equal(expected_value);
    });

    it("calculates the delta-v to low jupiter orbit", function() {
      var total_value = graph.walk(nodes.earth, nodes.low_jupiter_orbit);
      var expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_jupiter_transfer.value +
        edges.jupiter_transfer_low_jupiter_orbit.value;

      expect(total_value).to.equal(expected_value);
    });
  });
});
