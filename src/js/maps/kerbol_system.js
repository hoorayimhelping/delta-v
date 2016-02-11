import Node from '../graph/node';
import Edge from '../graph/edge';

let newNode = function(id) {
  let node = new Node();
  node.id = id;

  return node;
};

let newEdge = function(options) {
  return new Edge(options.deltav, options.name);
};

// values taken from http://i.imgur.com/duY2S.png
let nodes = {
  kerbin: newNode('Kerbin'),
  low_kerbin_orbit: newNode('Low Kerbin Orbit'),
  geostationary_transfer_orbit: newNode('GTO'),
  mun_transfer: newNode('Mun Transfer')
};

let edges = {
  kerbin_lko: newEdge({ deltav: 3800, name: 'kerbin-lko' }),
  lko_gto: newEdge({ deltav: 670, name: 'lko-gto' }),
  lko_mun_transfer: newEdge({ deltav: 190, name: 'lko-mun_transfer' })
};

module.exports = {
  nodes, edges
};
