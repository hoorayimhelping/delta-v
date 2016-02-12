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

export default class KerbolSystem {
  constructor() {
    this.nodes = {
      kerbin: new Node('Kerbin'),
      low_kerbin_orbit: new Node('Low Kerbin Orbit'),
      keostationary_transfer: new Node('Keostationary Transfer'),
      keostationary_orbit: new Node('Keostationary Orbit'),

      mun_transfer: new Node('Mun Transfer'),
      low_mun_orbit: new Node('Low Mun Orbit'),
      mun: new Node('Mun'),

      minmus_transfer: new Node('Minmus Transfer'),
      low_minmus_orbit: new Node('Low Minmus Orbit'),
      minmus: new Node('Minmus'),

      kerbin_transfer: new Node('Kerbin Transfer'),

      moho_transfer: new Node('Moho Transfer'),
      low_moho_orbit: new Node('Low Moho Orbit'),
      moho: new Node('Moho'),

      eve_transfer: new Node('Eve Transfer'),
      low_eve_orbit: new Node('Low Eve Orbit'),
      eve: new Node('Eve'),

      gilly_transfer: new Node('Gilly Transfer'),
      low_gilly_orbit: new Node('Low Gilly Orbit'),
      gilly: new Node('Gilly'),

      duna_transfer: new Node('Duna Transfer'),
      low_duna_orbit: new Node('Low Duna Orbit'),
      duna: new Node('Duna'),

      ike_transfer: new Node('Ike Transfer'),
      low_ike_orbit: new Node('Low Ike Orbit'),
      ike: new Node('Ike'),

      dres_transfer: new Node('Dres Transfer'),
      low_dres_orbit: new Node('Low Dres Orbit'),
      dres: new Node('Dres'),

      jool_transfer: new Node('Jool Transfer'),
      low_jool_orbit: new Node('Low Jool Orbit'),
      jool: new Node('Jool'),

      pol_transfer: new Node('Pol Transfer'),
      low_pol_orbit: new Node('Low Pol Orbit'),
      pol: new Node('Pol'),

      bop_transfer: new Node('Bop Transfer'),
      low_bop_orbit: new Node('Low Bop Orbit'),
      bop: new Node('Bop'),

      tylo_transfer: new Node('Tylo Transfer'),
      low_tylo_orbit: new Node('Low Tylo Orbit'),
      tylo: new Node('Tylo'),

      vall_transfer: new Node('Vall Transfer'),
      low_vall_orbit: new Node('Low Vall Orbit'),
      vall: new Node('Vall'),

      laythe_transfer: new Node('Laythe Transfer'),
      low_laythe_orbit: new Node('Low Laythe Orbit'),
      laythe: new Node('Laythe'),

      jool_transfer: new Node('Jool Transfer'),
      low_jool_orbit: new Node('Low Jool Orbit'),
      jool: new Node('Jool'),

      eeloo_transfer: new Node('Eeloo Transfer'),
      low_eeloo_orbit: new Node('Low Eeloo Orbit'),
      eeloo: new Node('Eeloo'),

      kerbol_transfer: new Node('Kerbol Transfer'),
      low_kerbol_orbit: new Node('Low Kerbol Orbit'),
      kerbol: new Node('Kerbol'),
    };

    this.edges = {
      low_kerbin_orbit: newEdge({ deltav: 3800, name: 'low_kerbin_orbit' }),

      low_kerbin_orbit_keostationary_transfer: newEdge({ deltav: 680, name: 'low_kerbin_orbit-keostationary_transfer' }),
      keostationary_transfer_keo_orbit: newEdge({ deltav: 435, name: 'keostationary_transfer-keostationary_orbit' }),

      low_kerbin_orbit_mun_transfer: newEdge({ deltav: 860, name: 'low_kerbin_orbit-mun_transfer' }),
      mun_transfer_low_mun_orbit: newEdge({ deltav: 310, name: 'mun_transfer-low_mun_orbit' }),
      low_mun_orbit_mun_landing: newEdge({ deltav: 580, name: 'low_mun_orbit-mun_landing' }),

      low_kerbin_orbit_minmus_transfer: newEdge({ deltav: 930, name: 'low_kerbin_orbit-minmus_transfer' }),
      low_kerbin_orbit_minmus_transfer_plane_change: newEdge({ deltav: 340, name: 'low_kerbin_orbit-minmus_transfer' }),
      minmus_transfer_low_minmus_orbit: newEdge({ deltav: 160, name: 'minmus_transfer-low_minmus_orbit' }),
      low_minmus_orbit_minmus_landing: newEdge({ deltav: 180, name: 'low_minmus_orbit-minmus_landing' }),

      low_kerbin_orbit_earth_transfer: newEdge({ deltav: 950, name: 'low_earth_orbit-earth_transfer' }),



      // earth_transfer_venus_transfer: newEdge({ deltav: 640, name: 'earth_transfer-venus_transfer' }),
      // venus_transfer_low_venus_orbit: newEdge({ deltav: 2940, name: 'venus_transfer-low_venus_orbit' }),
      // low_venus_orbit_venus_landing: newEdge({ deltav: 2000, name: 'low_venus_orbit-venus_landing' }),

      // earth_transfer_mercury_transfer: newEdge({ deltav: 2340, name: 'earth_transfer-mercury_transfer' }),
      // mercury_transfer_low_mercury_orbit: newEdge({ deltav: 7530, name: 'mercury_transfer-low_mercury_orbit' }),
      // low_mercury_orbit_mercury_landing: newEdge({ deltav: 3060, name: 'low_mercury_orbit-mercury_landing' }),

      // earth_transfer_mars_transfer: newEdge({ deltav: 1060, name: 'earth_transfer-mars_transfer' }),
      // mars_transfer_low_mars_orbit: newEdge({ deltav: 1440, name: 'mars_transfer-low_mars_orbit' }),
      // low_mars_orbit_mars_landing: newEdge({ deltav: 2000, name: 'low_mars_orbit-mars_landing' }),

      // mars_transfer_deimos_transfer: newEdge({ deltav: 340, name: 'mars_transfer-deimos_transfer' }),
      // deimos_transfer_low_deimos_orbit: newEdge({ deltav: 652, name: 'deimos_transfer-low_deimos_orbit' }),
      // low_deimos_orbit_deimos_landing: newEdge({ deltav: 4, name: 'low_deimos_orbit-deimos_landing' }),

      // mars_transfer_phobos_transfer: newEdge({ deltav: 740, name: 'mars_transfer-phobos_transfer'}),
      // phobos_transfer_low_phobos_orbit: newEdge({ deltav: 543, name: 'mars_transfer-phobos_transfer'}),
      // low_phobos_orbit_phobos_landing: newEdge({ deltav: 8, name: 'low_phobos_orbit-phobos_landing'}),

      // earth_transfer_jupiter_transfer: newEdge({ deltav: 3360, name: 'earth_transfer-jupiter_transfer' }),
      // jupiter_transfer_low_jupiter_orbit: newEdge({ deltav: 17200, name: 'jupiter_transfer-low_jupiter_orbit' }),

      // jupiter_transfer_callisto_transfer: newEdge({ deltav: 5140, name: 'jupiter_transfer-callisto_transfer' }),
      // callisto_transfer_low_callisto_orbit: newEdge({ deltav: 700, name: 'callisto_transfer-low_callisto_orbit' }),
      // low_callisto_orbit_callisto_landing: newEdge({ deltav: 1760, name: 'low_callisto_orbit-callisto_landing' }),

      // jupiter_transfer_ganymede_transfer: newEdge({ deltav: 6700, name: 'jupiter_transfer-ganymede_transfer' }),
      // ganymede_transfer_low_ganymede_orbit: newEdge({ deltav: 790, name: 'ganymede_transfer-low_ganymede_orbit' }),
      // low_ganymede_orbit_ganymede_landing: newEdge({ deltav: 1970, name: 'low_ganymede_orbit-ganymede_landing' }),

      // jupiter_transfer_europa_transfer: newEdge({ deltav: 8890, name: 'jupiter_transfer-europa_transfer' }),
      // europa_transfer_low_europa_orbit: newEdge({ deltav: 580, name: 'europa_transfer-low_europa_orbit' }),
      // low_europa_orbit_europa_landing: newEdge({ deltav: 1480, name: 'low_europa_orbit-europa_landing' }),

      // jupiter_transfer_io_transfer: newEdge({ deltav: 10320, name: 'jupiter_transfer-io_transfer' }),
      // io_transfer_low_io_orbit: newEdge({ deltav: 730, name: 'io_transfer-low_io_orbit' }),
      // low_io_orbit_io_landing: newEdge({ deltav: 1850, name: 'low_io_orbit-io_landing' }),

      // earth_transfer_saturn_transfer: newEdge({ deltav: 4500, name: 'earth_transfer-saturn_transfer' }),
      // saturn_transfer_low_saturn_orbit: newEdge({ deltav: 10230, name: 'saturn_transfer-low_saturn_orbit' }),

      // saturn_transfer_titan_transfer: newEdge({ deltav: 3060, name: 'saturn_transfer-titan_transfer' }),
      // titan_transfer_low_titan_orbit: newEdge({ deltav: 660, name: 'titan_transfer-low_titan_orbit' }),
      // low_titan_orbit_titan_landing: newEdge({ deltav: 7600, name: 'low_titan_orbit-titan_landing' }),

      // earth_transfer_uranus_transfer: newEdge({ deltav: 5280, name: 'earth_transfer-uranus_transfer' }),
      // uranus_transfer_low_uranus_orbit: newEdge({ deltav: 6120, name: 'uranus_transfer-low_uranus_orbit' }),

      // earth_transfer_neptune_transfer: newEdge({ deltav: 5390, name: 'earth_transfer-neptune_transfer' }),
      // neptune_transfer_low_neptune_orbit: newEdge({ deltav: 6750, name: 'neptune_transfer-low_neptune_orbit' }),

      // earth_transfer_sun_transfer: newEdge({ deltav: 196080, name: 'earth_transfer-sun_transfer' }),
      // sun_transfer_low_sun_orbit: newEdge({ deltav: 636080, name: 'sun_transfer-low_sun_orbit' })
    };
  }
}



// values taken from http://i.imgur.com/V4FHldK.png
// let nodes = {
//   kerbin: newNode('Kerbin'),
//   low_kerbin_orbit: newNode('Low Kerbin Orbit'),
//   keostationary_transfer_orbit: newNode('GTO'),
//   mun_transfer: newNode('Mun Transfer')
// };

// let edges = {
//   kerbin_lko: newEdge({ deltav: 3800, name: 'kerbin-lko' }),
//   lko_gto: newEdge({ deltav: 670, name: 'lko-gto' }),
//   lko_mun_transfer: newEdge({ deltav: 190, name: 'lko-mun_transfer' })
// };

// module.exports = {
//   nodes, edges
// };
