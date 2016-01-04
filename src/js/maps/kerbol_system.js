var Node = require('../graph/node');
var Edge = require('../graph/edge');

var newNode = function(id) {
    var node = new Node();
    node.id = id;

    return node;
};

var newEdge = function(options) {
    return new Edge(options.deltav, options.name);
};

// values taken from http://i.imgur.com/duY2S.png
var nodes = {
    kerbin: newNode('Kerbin'),
    low_kerbin_orbit: newNode('Low Kerbin Orbit'),
    geostationary_transfer_orbit: newNode('GTO'),
    mun_transfer: newNode('Mun Transfer')
};

var edges = {
    kerbin_lko: newEdge({ deltav: 3800, name: 'kerbin-lko' }),
    lko_gto: newEdge({ deltav: 670, name: 'lko-gto' }),
    lko_mun_transfer: newEdge({ deltav: 190, name: 'lko-mun_transfer' })
};

// es6 !!
module.exports = {
    nodes, edges
};
