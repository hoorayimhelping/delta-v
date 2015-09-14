var Node = require('../src/node');
var Edge = require('../src/edge');

var newNode = function(id) {
    var node = new Node();
    node.id = id;

    return node;
};

var newEdge = function(options) {
    return new Edge(options.deltav, options.name);
};

// values taken from http://i.imgur.com/SqdzxzF.png

var nodes = {
    earth: newNode('Earth'),
    leo: newNode('Low Earth Orbit'),
    geo_transfer: newNode('Geostationary Transfer'),
    geostationary: newNode('Geostationary Orbit'),
    moon_transfer: newNode('Moon Transfer'),
    low_moon_orbit: newNode('Low Moon Orbit'),
    earth_transfer: newNode('Earth Transfer'),
    mars_transfer: newNode('Mars Transfer'),
    deimos_transfer: newNode('Deimos Transfer'),
    low_deimos_orbit: newNode('Low Deimos Orbit'),
    deimos: newNode('Deimos')
};

var edges = {
    low_earth_orbit: newEdge({ deltav: 9400, name: 'low_earth_orbit' }),
    leo_geo_transfer: newEdge({ deltav: 2440, name: 'leo-geo_transfer' }),
    geo_transfer_geo_orbit: newEdge({ deltav: 1470, name: 'geostationary_transfer-geostationary_orbit' }),
    leo_moon_transfer: newEdge({ deltav: 3260, name: 'leo-moon_transfer' }),
    moon_transfer_lmo: newEdge({ deltav: 680, name: 'moon_transfer-low_moon_orbit' }),
    leo_earth_transfer: newEdge({ deltav: 3210, name: 'leo-earth_transfer' }),
    earth_transfer_mars_transfer: newEdge({ deltav: 1060, name: 'earth_transfer-mars_transfer' }),
    mars_transfer_deimos_transfer: newEdge({ deltav: 340, name: 'mars_transfer_deimos_transfer' }),
    deimos_transfer_low_deimos_orbit: newEdge({ deltav: 652, name: 'deimos_transfer_low_deimos_orbit' }),
    low_deimos_orbit_deimos: newEdge({ deltav: 4, name: 'low_deimos_orbit_deimos' })
};
var reset = function() {
    return {
        nodes,
        edges
    }
};

// es6 !!
module.exports = {
    nodes, edges, reset
};