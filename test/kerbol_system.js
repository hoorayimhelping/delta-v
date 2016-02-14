import Graph from '../src/js/graph/graph';
import Node from '../src/js/graph/node';
import Edge from '../src/js/graph/edge';

import KerbolSystem from '../src/js/maps/kerbol_system';

const kerbolSystem = new KerbolSystem();

describe("one-way trips from kerbin", () => {
  let edges = kerbolSystem.edges;
  let nodes = kerbolSystem.nodes;
  let graph = new Graph();

  kerbolSystem.buildGraph(graph, edges, nodes);

  afterEach(() => {
    kerbolSystem.unwalkNodes();
  });

  it("calculates the delta-v to keostationary orbit", () => {
    let totalValue = graph.walk(nodes.kerbin, nodes.keostationary_orbit);
    let expectedValue = edges.low_kerbin_orbit.value +
      edges.low_kerbin_orbit_keostationary_transfer.value +
      edges.keostationary_transfer_keo_orbit.value;

    expect(totalValue).to.equal(expectedValue);
  });

  describe("to munar space", () => {
    let kerbin_to_low_munar_orbit_delta_v = edges.low_kerbin_orbit.value +
      edges.low_kerbin_orbit_mun_transfer.value +
      edges.mun_transfer_low_mun_orbit.value;

    it("calulates the delta-v to munar orbit", () => {
      let totalValue = graph.walk(nodes.kerbin, nodes.low_mun_orbit);

      expect(totalValue).to.equal(kerbin_to_low_munar_orbit_delta_v);
    });

    it("calculates the delta-v to a munar surface landing", () => {
      let totalValue = graph.walk(nodes.kerbin, nodes.mun);

      expect(totalValue).to.equal(kerbin_to_low_munar_orbit_delta_v + edges.low_mun_orbit_mun_landing.value);
    });
  });
});
