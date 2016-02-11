import Graph from '../src/js/graph/graph';
import Node from '../src/js/graph/node';
import Edge from '../src/js/graph/edge';

import solar_system from '../src/js/maps/solar_system';
import kerbol_system from '../src/js/maps/kerbol_system';

describe("checking a graph for adjacency", function() {
  let graph = new Graph();
  let edges = kerbol_system.edges;
  let nodes = kerbol_system.nodes;

  graph.addEdge(edges.kerbin_lko, nodes.kerbin, nodes.low_kerbin_orbit);
  graph.addEdge(edges.lko_gto, nodes.low_kerbin_orbit, nodes.geostationary_transfer_orbit);
  graph.addEdge(edges.lko_mun_transfer, nodes.low_kerbin_orbit, nodes.mun_transfer);

  it("returns true for nodes that are ajdacent", function() {
    expect(graph.areAdjacent(nodes.kerbin, nodes.low_kerbin_orbit)).to.be.true;
    expect(graph.areAdjacent(nodes.low_kerbin_orbit, nodes.geostationary_transfer_orbit)).to.be.true;
    expect(graph.areAdjacent(nodes.low_kerbin_orbit, nodes.mun_transfer)).to.be.true;
  });

  it("returns false for nodes that aren't adjacent", function() {
    expect(graph.areAdjacent(nodes.kerbin, nodes.geostationary_transfer_orbit)).to.be.false;
    expect(graph.areAdjacent(nodes.kerbin, nodes.mun_transfer)).to.be.false;
  });
});
