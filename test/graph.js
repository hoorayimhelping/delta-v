var Graph = require('../src/js/graph/graph');
var Node = require('../src/js/graph/node');
var Edge = require('../src/js/graph/edge');

var solar_system = require('../src/js/maps/solar_system');
var kerbol_system = require('../src/js/maps/kerbol_system');

describe("checking a graph for adjacency", function() {
  var graph = new Graph();
  var edges = kerbol_system.edges;
  var nodes = kerbol_system.nodes;

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
