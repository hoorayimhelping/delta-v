var describe = require('tape');
var Graph = require('../graph/graph');
var Node = require('../graph/node');
var Edge = require('../graph/edge');

var solar_system = require('../maps/solar_system');
var kerbol_system = require('../maps/kerbol_system');

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
