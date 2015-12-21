var Node = require('../graph/node');
var Edge = require('../graph/edge');

var newEdge = function(options) {
    return new Edge(options.deltav, options.name);
};

// values taken from http://i.imgur.com/SqdzxzF.png

var SolarSystem = function() {
  this.nodes = {
    earth: new Node('Earth'),
    low_earth_orbit: new Node('Low Earth Orbit'),
    geostationary_transfer: new Node('Geostationary Transfer'),
    geostationary_orbit: new Node('Geostationary Orbit'),

    moon_transfer: new Node('Moon Transfer'),
    low_moon_orbit: new Node('Low Moon Orbit'),
    moon: new Node('Moon'),

    earth_transfer: new Node('Earth Transfer'),

    venus_transfer: new Node('Venus Transfer'),
    low_venus_orbit: new Node('Low Venus Orbit'),
    venus: new Node('Venus'),

    mars_transfer: new Node('Mars Transfer'),
    low_mars_orbit: new Node('Low Mars Orbit'),
    mars: new Node('Mars'),

    deimos_transfer: new Node('Deimos Transfer'),
    low_deimos_orbit: new Node('Low Deimos Orbit'),
    deimos: new Node('Deimos'),

    phobos_transfer: new Node('Phobos Transfer'),
    low_phobos_orbit: new Node('Low Phobos Orbit'),
    phobos: new Node('Phobos')
  };

  this.edges = {
    low_earth_orbit: newEdge({ deltav: 9400, name: 'low_earth_orbit' }),

    low_earth_orbit_geostationary_transfer: newEdge({ deltav: 2440, name: 'low_earth_orbit-geostationary_transfer' }),
    geostationary_transfer_geo_orbit: newEdge({ deltav: 1470, name: 'geostationary_transfer-geostationary_orbit' }),

    low_earth_orbit_moon_transfer: newEdge({ deltav: 3260, name: 'low_earth_orbit-moon_transfer' }),
    moon_transfer_low_moon_orbit: newEdge({ deltav: 680, name: 'moon_transfer-low_moon_orbit' }),
    low_moon_orbit_moon_landing: newEdge({ deltav: 1730, name: 'low_moon_orbit-moon_landing' }),

    low_earth_orbit_earth_transfer: newEdge({ deltav: 3210, name: 'low_earth_orbit-earth_transfer' }),

    earth_transfer_venus_transfer: newEdge({ deltav: 640, name: 'earth_transfer-venus_transfer' }),
    venus_transfer_low_venus_orbit: newEdge({ deltav: 2940, name: 'venus_transfer-low_venus_orbit' }),
    low_venus_orbit_venus_landing: newEdge({ deltav: 2000, name: 'low_venus_orbit-venus_landing' }),

    earth_transfer_mars_transfer: newEdge({ deltav: 1060, name: 'earth_transfer-mars_transfer' }),
    mars_transfer_low_mars_orbit: newEdge({ deltav: 1440, name: 'mars_transfer-low_mars_orbit' }),
    low_mars_orbit_mars_landing: newEdge({ deltav: 2000, name: 'low_mars_orbit-mars_landing' }),

    mars_transfer_deimos_transfer: newEdge({ deltav: 340, name: 'mars_transfer-deimos_transfer' }),
    deimos_transfer_low_deimos_orbit: newEdge({ deltav: 652, name: 'deimos_transfer-low_deimos_orbit' }),
    low_deimos_orbit_deimos_landing: newEdge({ deltav: 4, name: 'low_deimos_orbit-deimos_landing' }),

    mars_transfer_phobos_transfer: newEdge({ deltav: 740, name: 'mars_transfer-phobos_transfer'}),
    phobos_transfer_low_phobos_orbit: newEdge({ deltav: 543, name: 'mars_transfer-phobos_transfer'}),
    low_phobos_orbit_phobos_landing: newEdge({ deltav: 8, name: 'low_phobos_orbit-phobos_landing'})
  };
};

SolarSystem.prototype = {
  unwalkNodes: function() {
    for (var node in this.nodes) {
      this.nodes[node].visited = false;
    }
  },

  buildGraph: function(graph, edges, nodes) {
    // earth
    graph.addEdge(edges.low_earth_orbit, nodes.earth, nodes.low_earth_orbit);

    graph.addEdge(edges.low_earth_orbit_geostationary_transfer, nodes.low_earth_orbit, nodes.geostationary_transfer);
    graph.addEdge(edges.geostationary_transfer_geo_orbit, nodes.geostationary_transfer, nodes.geostationary_orbit);

    graph.addEdge(edges.low_earth_orbit_moon_transfer, nodes.low_earth_orbit, nodes.moon_transfer);
    graph.addEdge(edges.moon_transfer_low_moon_orbit, nodes.moon_transfer, nodes.low_moon_orbit);
    graph.addEdge(edges.low_moon_orbit_moon_landing, nodes.low_moon_orbit, nodes.moon);

    graph.addEdge(edges.low_earth_orbit_earth_transfer, nodes.low_earth_orbit, nodes.earth_transfer);

    // venus
    graph.addEdge(edges.earth_transfer_venus_transfer, nodes.earth_transfer, nodes.venus_transfer);
    graph.addEdge(edges.venus_transfer_low_venus_orbit, nodes.venus_transfer, nodes.low_venus_orbit);
    graph.addEdge(edges.low_venus_orbit_venus_landing, nodes.low_venus_orbit, nodes.venus);

    // mars
    graph.addEdge(edges.earth_transfer_mars_transfer, nodes.earth_transfer, nodes.mars_transfer);
    graph.addEdge(edges.mars_transfer_low_mars_orbit, nodes.mars_transfer, nodes.low_mars_orbit);
    graph.addEdge(edges.low_mars_orbit_mars_landing, nodes.low_mars_orbit, nodes.mars);

    graph.addEdge(edges.mars_transfer_deimos_transfer, nodes.mars_transfer, nodes.deimos_transfer);
    graph.addEdge(edges.deimos_transfer_low_deimos_orbit, nodes.deimos_transfer, nodes.low_deimos_orbit);
    graph.addEdge(edges.low_deimos_orbit_deimos_landing, nodes.low_deimos_orbit, nodes.deimos);

    graph.addEdge(edges.mars_transfer_phobos_transfer, nodes.mars_transfer, nodes.phobos_transfer);
    graph.addEdge(edges.phobos_transfer_low_phobos_orbit, nodes.phobos_transfer, nodes.low_phobos_orbit);
    graph.addEdge(edges.low_phobos_orbit_phobos_landing, nodes.low_phobos_orbit, nodes.phobos);
  }
};

module.exports = new SolarSystem();
