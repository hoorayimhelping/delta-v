import Graph from '../src/js/graph/graph';
import Node from '../src/js/graph/node';
import Edge from '../src/js/graph/edge';

import solar_system from '../src/js/maps/solar_system';

describe("one-way trips from earth", function() {
  let edges = solar_system.edges;
  let nodes = solar_system.nodes;

  let graph = new Graph();
  solar_system.buildGraph(graph, edges, nodes);

  afterEach(function() {
    solar_system.unwalkNodes();
  });

  it("calculates the delta-v to geostationary orbit", function() {
    let total_value = graph.walk(nodes.earth, nodes.geostationary_orbit);
    let expected_value = edges.low_earth_orbit.value +
      edges.low_earth_orbit_geostationary_transfer.value +
      edges.geostationary_transfer_geo_orbit.value;

    expect(total_value).to.equal(expected_value);
  });

  describe("to lunar space", function() {
    let earth_to_low_lunar_orbit_delta_v = edges.low_earth_orbit.value +
      edges.low_earth_orbit_moon_transfer.value +
      edges.moon_transfer_low_moon_orbit.value;

    it("calulates the delta-v to lunar orbit", function() {
      let total_value = graph.walk(nodes.earth, nodes.low_moon_orbit);

      expect(total_value).to.equal(earth_to_low_lunar_orbit_delta_v);
    });

    it("calculates the delta-v to a lunar surface landing", function() {
      let total_value = graph.walk(nodes.earth, nodes.moon);

      expect(total_value).to.equal(earth_to_low_lunar_orbit_delta_v + edges.low_moon_orbit_moon_landing.value);
    });
  });

  describe("to venutian space", function() {
    it("calculates the delta-v to venus transfer orbit", function() {
      let total_value = graph.walk(nodes.earth, nodes.venus_transfer);
      let expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_venus_transfer.value;

      expect(total_value).to.equal(expected_value);
    });

    it("calculates the delta-v to low venus orbit", function() {
      let total_value = graph.walk(nodes.earth, nodes.low_venus_orbit);
      let expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_venus_transfer.value +
        edges.venus_transfer_low_venus_orbit.value;

      expect(total_value).to.equal(expected_value);
    });

    it("calculates the delta-v to a venus landing", function() {
      let total_value = graph.walk(nodes.earth, nodes.venus);
      let expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_venus_transfer.value +
        edges.venus_transfer_low_venus_orbit.value +
        edges.low_venus_orbit_venus_landing.value;

      expect(total_value).to.equal(expected_value);
    });
  });

  describe("to mercurian space", function() {
    it("calculates the delta-v to mercury transfer orbit", function() {
      let total_value = graph.walk(nodes.earth, nodes.mercury_transfer);
      let expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_mercury_transfer.value;

      expect(total_value).to.equal(expected_value);
    });

    it("calculates the delta-v to low mercury orbit", function() {
      let total_value = graph.walk(nodes.earth, nodes.low_mercury_orbit);
      let expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_mercury_transfer.value +
        edges.mercury_transfer_low_mercury_orbit.value;

      expect(total_value).to.equal(expected_value);
    });

    it("calculates the delta-v to a mercury landing", function() {
      let total_value = graph.walk(nodes.earth, nodes.mercury);
      let expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_mercury_transfer.value +
        edges.mercury_transfer_low_mercury_orbit.value +
        edges.low_mercury_orbit_mercury_landing.value;

      expect(total_value).to.equal(expected_value);
    });
  });

  describe("to martian space", function() {
    it("calculates the delta-v to mars transfer orbit", function() {
      let total_value = graph.walk(nodes.earth, nodes.mars_transfer);
      let expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_mars_transfer.value;

      expect(total_value).to.equal(expected_value);
    });

    it("calculates the delta-v to low mars orbit", function() {
      let total_value = graph.walk(nodes.earth, nodes.low_mars_orbit);
      let expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_mars_transfer.value +
        edges.mars_transfer_low_mars_orbit.value;

      expect(total_value).to.equal(expected_value);
    });

    it("calculates the delta-v to a mars landing", function() {
      let total_value = graph.walk(nodes.earth, nodes.mars);
      let expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_mars_transfer.value +
        edges.mars_transfer_low_mars_orbit.value +
        edges.low_mars_orbit_mars_landing.value;

      expect(total_value).to.equal(expected_value);
    });

    describe("to deimos space", function() {
      it("calculates the delta-v to low deimos orbit", function() {
        let total_value = graph.walk(nodes.earth, nodes.low_deimos_orbit);

        let expected_value = edges.low_earth_orbit.value +
          edges.low_earth_orbit_earth_transfer.value +
          edges.earth_transfer_mars_transfer.value +
          edges.mars_transfer_deimos_transfer.value +
          edges.deimos_transfer_low_deimos_orbit.value;

        expect(total_value).to.equal(expected_value);
      });

      it("calculates the delta-v to a deimos landing", function() {
        let total_value = graph.walk(nodes.earth, nodes.deimos);

        let expected_value = edges.low_earth_orbit.value +
          edges.low_earth_orbit_earth_transfer.value +
          edges.earth_transfer_mars_transfer.value +
          edges.mars_transfer_deimos_transfer.value +
          edges.deimos_transfer_low_deimos_orbit.value +
          edges.low_deimos_orbit_deimos_landing.value;

        expect(total_value).to.equal(expected_value);
      });

      describe("to phobos space", function() {
        it("calculates the delta-v to low phobos orbit", function() {
          let total_value = graph.walk(nodes.earth, nodes.low_phobos_orbit);

          let expected_value = edges.low_earth_orbit.value +
            edges.low_earth_orbit_earth_transfer.value +
            edges.earth_transfer_mars_transfer.value +
            edges.mars_transfer_phobos_transfer.value +
            edges.phobos_transfer_low_phobos_orbit.value;

          expect(total_value).to.equal(expected_value);
        });

        it("calculates the delta-v to a phobos landing", function() {
          let total_value = graph.walk(nodes.earth, nodes.phobos);

          let expected_value = edges.low_earth_orbit.value +
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
      let total_value = graph.walk(nodes.earth, nodes.jupiter_transfer);
      let expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_jupiter_transfer.value;

      expect(total_value).to.equal(expected_value);
    });

    it("calculates the delta-v to low jupiter orbit", function() {
      let total_value = graph.walk(nodes.earth, nodes.low_jupiter_orbit);
      let expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_jupiter_transfer.value +
        edges.jupiter_transfer_low_jupiter_orbit.value;

      expect(total_value).to.equal(expected_value);
    });

    describe("to callisto space", function() {
      it("calculates the delta-v to low callisto orbit", function() {
        let total_value = graph.walk(nodes.earth, nodes.low_callisto_orbit);

        let expected_value = edges.low_earth_orbit.value +
          edges.low_earth_orbit_earth_transfer.value +
          edges.earth_transfer_jupiter_transfer.value +
          edges.jupiter_transfer_callisto_transfer.value +
          edges.callisto_transfer_low_callisto_orbit.value;

        expect(total_value).to.equal(expected_value);
      });

      it("calculates the delta-v to a callisto landing", function() {
        let total_value = graph.walk(nodes.earth, nodes.callisto);

        let expected_value = edges.low_earth_orbit.value +
          edges.low_earth_orbit_earth_transfer.value +
          edges.earth_transfer_jupiter_transfer.value +
          edges.jupiter_transfer_callisto_transfer.value +
          edges.callisto_transfer_low_callisto_orbit.value +
          edges.low_callisto_orbit_callisto_landing.value;

        expect(total_value).to.equal(expected_value);
      });
    });

    describe("to ganymede space", function() {
      it("calculates the delta-v to low ganymede orbit", function() {
        let total_value = graph.walk(nodes.earth, nodes.low_ganymede_orbit);

        let expected_value = edges.low_earth_orbit.value +
          edges.low_earth_orbit_earth_transfer.value +
          edges.earth_transfer_jupiter_transfer.value +
          edges.jupiter_transfer_ganymede_transfer.value +
          edges.ganymede_transfer_low_ganymede_orbit.value;

        expect(total_value).to.equal(expected_value);
      });

      it("calculates the delta-v to a ganymede landing", function() {
        let total_value = graph.walk(nodes.earth, nodes.ganymede);

        let expected_value = edges.low_earth_orbit.value +
          edges.low_earth_orbit_earth_transfer.value +
          edges.earth_transfer_jupiter_transfer.value +
          edges.jupiter_transfer_ganymede_transfer.value +
          edges.ganymede_transfer_low_ganymede_orbit.value +
          edges.low_ganymede_orbit_ganymede_landing.value;

        expect(total_value).to.equal(expected_value);
      });
    });

    describe("to europa space", function() {
      it("calculates the delta-v to low europa orbit", function() {
        let total_value = graph.walk(nodes.earth, nodes.low_europa_orbit);

        let expected_value = edges.low_earth_orbit.value +
          edges.low_earth_orbit_earth_transfer.value +
          edges.earth_transfer_jupiter_transfer.value +
          edges.jupiter_transfer_europa_transfer.value +
          edges.europa_transfer_low_europa_orbit.value;

        expect(total_value).to.equal(expected_value);
      });

      it("calculates the delta-v to a europa landing", function() {
        let total_value = graph.walk(nodes.earth, nodes.europa);

        let expected_value = edges.low_earth_orbit.value +
          edges.low_earth_orbit_earth_transfer.value +
          edges.earth_transfer_jupiter_transfer.value +
          edges.jupiter_transfer_europa_transfer.value +
          edges.europa_transfer_low_europa_orbit.value +
          edges.low_europa_orbit_europa_landing.value;

        expect(total_value).to.equal(expected_value);
      });
    });

    describe("to io space", function() {
      it("calculates the delta-v to low io orbit", function() {
        let total_value = graph.walk(nodes.earth, nodes.low_io_orbit);

        let expected_value = edges.low_earth_orbit.value +
          edges.low_earth_orbit_earth_transfer.value +
          edges.earth_transfer_jupiter_transfer.value +
          edges.jupiter_transfer_io_transfer.value +
          edges.io_transfer_low_io_orbit.value;

        expect(total_value).to.equal(expected_value);
      });

      it("calculates the delta-v to a io landing", function() {
        let total_value = graph.walk(nodes.earth, nodes.io);

        let expected_value = edges.low_earth_orbit.value +
          edges.low_earth_orbit_earth_transfer.value +
          edges.earth_transfer_jupiter_transfer.value +
          edges.jupiter_transfer_io_transfer.value +
          edges.io_transfer_low_io_orbit.value +
          edges.low_io_orbit_io_landing.value;

        expect(total_value).to.equal(expected_value);
      });
    });
  });

  describe("to saturn space", function() {
    it("calculates the delta-v to saturn transfer orbit", function() {
      let total_value = graph.walk(nodes.earth, nodes.saturn_transfer);
      let expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_saturn_transfer.value;

      expect(total_value).to.equal(expected_value);
    });

    it("calculates the delta-v to low saturn orbit", function() {
      let total_value = graph.walk(nodes.earth, nodes.low_saturn_orbit);
      let expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_saturn_transfer.value +
        edges.saturn_transfer_low_saturn_orbit.value;

      expect(total_value).to.equal(expected_value);
    });

    describe("to titan space", function() {
      it("calculates the delta-v to low titan orbit", function() {
        let total_value = graph.walk(nodes.earth, nodes.low_titan_orbit);

        let expected_value = edges.low_earth_orbit.value +
          edges.low_earth_orbit_earth_transfer.value +
          edges.earth_transfer_saturn_transfer.value +
          edges.saturn_transfer_titan_transfer.value +
          edges.titan_transfer_low_titan_orbit.value;

        expect(total_value).to.equal(expected_value);
      });

      it("calculates the delta-v to a titan landing", function() {
        let total_value = graph.walk(nodes.earth, nodes.titan);

        let expected_value = edges.low_earth_orbit.value +
          edges.low_earth_orbit_earth_transfer.value +
          edges.earth_transfer_saturn_transfer.value +
          edges.saturn_transfer_titan_transfer.value +
          edges.titan_transfer_low_titan_orbit.value +
          edges.low_titan_orbit_titan_landing.value;

        expect(total_value).to.equal(expected_value);
      });
    });
  });

  describe("to uranus space", function() {
    it("calculates the delta-v to uranus transfer orbit", function() {
      let total_value = graph.walk(nodes.earth, nodes.uranus_transfer);
      let expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_uranus_transfer.value;

      expect(total_value).to.equal(expected_value);
    });

    it("calculates the delta-v to low uranus orbit", function() {
      let total_value = graph.walk(nodes.earth, nodes.low_uranus_orbit);
      let expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_uranus_transfer.value +
        edges.uranus_transfer_low_uranus_orbit.value;

      expect(total_value).to.equal(expected_value);
    });
  });

  describe("to neptonian space", function() {
    it("calculates the delta-v to neptune transfer orbit", function() {
      let total_value = graph.walk(nodes.earth, nodes.neptune_transfer);
      let expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_neptune_transfer.value;

      expect(total_value).to.equal(expected_value);
    });

    it("calculates the delta-v to low neptune orbit", function() {
      let total_value = graph.walk(nodes.earth, nodes.low_neptune_orbit);
      let expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_neptune_transfer.value +
        edges.neptune_transfer_low_neptune_orbit.value;

      expect(total_value).to.equal(expected_value);
    });
  });

  describe("to solar space", function() {
    it("calculates the delta-v to sun transfer orbit", function() {
      let total_value = graph.walk(nodes.earth, nodes.sun_transfer);
      let expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_sun_transfer.value;

      expect(total_value).to.equal(expected_value);
    });

    it("calculates the delta-v to low sun orbit", function() {
      let total_value = graph.walk(nodes.earth, nodes.low_sun_orbit);
      let expected_value = edges.low_earth_orbit.value +
        edges.low_earth_orbit_earth_transfer.value +
        edges.earth_transfer_sun_transfer.value +
        edges.sun_transfer_low_sun_orbit.value;

      expect(total_value).to.equal(expected_value);
    });
  });
});
