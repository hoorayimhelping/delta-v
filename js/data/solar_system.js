var Node = require('../src/node');
var Edge = require('../src/edge');

var newEdge = function(options) {
    return new Edge(options.deltav, options.name);
};

// values taken from http://i.imgur.com/SqdzxzF.png

var SolarSystem = function() {
    this.nodes = {
        earth: new Node('Earth'),
        leo: new Node('Low Earth Orbit'),
        geo_transfer: new Node('Geostationary Transfer'),
        geostationary: new Node('Geostationary Orbit'),
        moon_transfer: new Node('Moon Transfer'),
        low_moon_orbit: new Node('Low Moon Orbit'),
        earth_transfer: new Node('Earth Transfer'),
        mars_transfer: new Node('Mars Transfer'),
        deimos_transfer: new Node('Deimos Transfer'),
        low_deimos_orbit: new Node('Low Deimos Orbit'),
        deimos: new Node('Deimos')
    };

    this.edges = {
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
};

SolarSystem.prototype = {
    unwalkNodes: function() {
        for (var node in this.nodes) {
            this.nodes[node].visited = false;
        }
    }
};

// es6 !!
module.exports = new SolarSystem();