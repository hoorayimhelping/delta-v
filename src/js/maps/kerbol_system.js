import Node from '../graph/node';
import Edge from '../graph/edge';

let newEdge = function(options) {
  return new Edge(options.deltav, options.name);
};

export default class KerbolSystem {
  constructor() {
    this.defaultStartNode = "Low Kerbin Orbit";
    this.defaultEndNode = "Mun";

    this.nodes = {
      kerbin: new Node('Kerbin'),
      low_kerbin_orbit: new Node('Low Kerbin Orbit'),
      keostationary_transfer: new Node('Keostationary Transfer'),
      keostationary_orbit: new Node('Keostationary Orbit'),

      mun_transfer: new Node('Mun Transfer'),
      mun_plane_change: new Node('Mun Plane Change'),
      mun_capture: new Node('Mun Capture'),
      low_mun_orbit: new Node('Low Mun Orbit'),
      mun: new Node('Mun'),

      minmus_transfer: new Node('Minmus Transfer'),
      minmus_plane_change: new Node('Minmus Plane Change'),
      minmus_capture: new Node('Minmus Capture'),
      low_minmus_orbit: new Node('Low Minmus Orbit'),
      minmus: new Node('Minmus'),

      kerbin_transfer: new Node('Kerbin Transfer'),

      moho_transfer: new Node('Moho Transfer'),
      moho_plane_change: new Node('Moho Plane Change'),
      moho_capture: new Node('Moho Capture'),
      low_moho_orbit: new Node('Low Moho Orbit'),
      moho: new Node('Moho'),

      eve_transfer: new Node('Eve Transfer'),
      eve_plane_change: new Node('Eve Plane Change'),
      eve_capture: new Node('Eve Capture'),
      low_eve_orbit: new Node('Low Eve Orbit'),
      eve: new Node('Eve'),

      gilly_transfer: new Node('Gilly Transfer'),
      gilly_plane_change: new Node('Gilly Plane Change'),
      gilly_capture: new Node('Gilly Capture'),
      low_gilly_orbit: new Node('Low Gilly Orbit'),
      gilly: new Node('Gilly'),

      duna_transfer: new Node('Duna Transfer'),
      duna_plane_change: new Node('Duna Plane Change'),
      duna_capture: new Node('Duna Capture'),
      low_duna_orbit: new Node('Low Duna Orbit'),
      duna: new Node('Duna'),

      ike_transfer: new Node('Ike Transfer'),
      ike_plane_change: new Node('Ike Plane Change'),
      ike_capture: new Node('Ike Capture'),
      low_ike_orbit: new Node('Low Ike Orbit'),
      ike: new Node('Ike'),

      dres_transfer: new Node('Dres Transfer'),
      dres_plane_change: new Node('Dres Plane Change'),
      dres_capture: new Node('Dres Capture'),
      low_dres_orbit: new Node('Low Dres Orbit'),
      dres: new Node('Dres'),

      jool_transfer: new Node('Jool Transfer'),
      jool_plane_change: new Node('Jool Plane Change'),
      jool_capture: new Node('Jool Capture'),
      low_jool_orbit: new Node('Low Jool Orbit'),
      jool: new Node('Jool'),

      pol_transfer: new Node('Pol Transfer'),
      pol_plane_change: new Node('Pol Plane Change'),
      pol_capture: new Node('Pol Capture'),
      low_pol_orbit: new Node('Low Pol Orbit'),
      pol: new Node('Pol'),

      bop_transfer: new Node('Bop Transfer'),
      bop_plane_change: new Node('Bop Plane Change'),
      bop_capture: new Node('Bop Capture'),
      low_bop_orbit: new Node('Low Bop Orbit'),
      bop: new Node('Bop'),

      tylo_transfer: new Node('Tylo Transfer'),
      tylo_plane_change: new Node('Tylo Plane Change'),
      tylo_capture: new Node('Tylo Capture'),
      low_tylo_orbit: new Node('Low Tylo Orbit'),
      tylo: new Node('Tylo'),

      vall_transfer: new Node('Vall Transfer'),
      vall_plane_change: new Node('Vall Plane Change'),
      vall_capture: new Node('Vall Capture'),
      low_vall_orbit: new Node('Low Vall Orbit'),
      vall: new Node('Vall'),

      laythe_transfer: new Node('Laythe Transfer'),
      laythe_plane_change: new Node('Laythe Plane Change'),
      laythe_capture: new Node('Laythe Capture'),
      low_laythe_orbit: new Node('Low Laythe Orbit'),
      laythe: new Node('Laythe'),

      eeloo_transfer: new Node('Eeloo Transfer'),
      eeloo_plane_change: new Node('Eeloo Plane Change'),
      eeloo_capture: new Node('Eeloo Capture'),
      low_eeloo_orbit: new Node('Low Eeloo Orbit'),
      eeloo: new Node('Eeloo'),

      kerbol_transfer: new Node('Kerbol Transfer'),
      kerbol_plane_change: new Node('Kerbol Plane Change'),
      kerbol_capture: new Node('Kerbol Capture'),
      low_kerbol_orbit: new Node('Low Kerbol Orbit'),
      kerbol: new Node('Kerbol')
    };

    this.edges = {
      low_kerbin_orbit: newEdge({ deltav: 3800, name: 'low_kerbin_orbit' }),

      low_kerbin_orbit_keostationary_transfer: newEdge({ deltav: 680, name: 'low_kerbin_orbit-keostationary_transfer' }),
      keostationary_transfer_keo_orbit: newEdge({ deltav: 435, name: 'keostationary_transfer-keostationary_orbit' }),

      low_kerbin_orbit_mun_transfer: newEdge({ deltav: 860, name: 'low_kerbin_orbit-mun_transfer' }),
      mun_transfer_plane_change: newEdge({ deltav: 0, name: 'mun_transfer-plane_change' }),
      mun_transfer_mun_capture: newEdge({ deltav: 80, name: 'mun_transfer-mun_capture' }),
      mun_capture_low_mun_orbit: newEdge({ deltav: 230, name: 'mun_capture-low_mun_orbit' }),
      low_mun_orbit_mun_landing: newEdge({ deltav: 580, name: 'low_mun_orbit-mun_landing' }),

      low_kerbin_orbit_minmus_transfer: newEdge({ deltav: 930, name: 'low_kerbin_orbit-minmus_transfer' }),
      minmus_transfer_plane_change: newEdge({ deltav: 340, name: 'minmus_transfer-plane_change' }),
      minmus_transfer_minmus_capture: newEdge({ deltav: 90, name: 'minmus_transfer-minmus_capture' }),
      minmus_capture_low_minmus_orbit: newEdge({ deltav: 70, name: 'minmus_capture-low_minmus_orbit' }),
      low_minmus_orbit_minmus_landing: newEdge({ deltav: 180, name: 'low_minmus_orbit-minmus_landing' }),

      low_kerbin_orbit_kerbin_transfer: newEdge({ deltav: 950, name: 'low_kerbin_orbit-kerbin_transfer' }),

      kerbin_transfer_moho_transfer: newEdge({ deltav: 760, name: 'kerbin_transfer-moho_transfer' }),
      moho_transfer_plane_change: newEdge({ deltav: 2520, name: 'moho_transfer-plane_change' }),
      moho_transfer_moho_capture: newEdge({ deltav: 2090, name: 'moho_transfer-moho_capture' }),
      moho_capture_low_moho_orbit: newEdge({ deltav: 320, name: 'moho_capture-low_moho_orbit' }),
      low_moho_orbit_moho_landing: newEdge({ deltav: 870, name: 'low_moho_orbit-moho_landing' }),

      kerbin_transfer_eve_transfer: newEdge({ deltav: 90, name: 'kerbin_transfer-eve_transfer' }),
      eve_transfer_plane_change: newEdge({ deltav: 430, name: 'eve_transfer-plane_change' }),
      eve_transfer_eve_capture: newEdge({ deltav: 80, name: 'eve_transfer-eve_capture' }),
      eve_capture_low_eve_orbit: newEdge({ deltav: 1330, name: 'eve_capture-low_eve_orbit' }),
      low_eve_orbit_eve_landing: newEdge({ deltav: 150, name: 'low_eve_orbit-eve_landing' }),

      eve_transfer_gilly_transfer: newEdge({ deltav: 140, name: 'eve_transfer-gilly_transfer' }),
      gilly_transfer_plane_change: newEdge({ deltav: 930, name: 'gilly_transfer-plane_change' }),
      gilly_transfer_gilly_capture: newEdge({ deltav: 30, name: 'gilly_transfer-gilly_capture' }),
      gilly_capture_low_gilly_orbit: newEdge({ deltav: 150, name: 'gilly_capture-low_gilly_orbit' }),
      low_gilly_orbit_gilly_landing: newEdge({ deltav: 30, name: 'low_gilly_orbit-gilly_landing' }),

      kerbin_transfer_duna_transfer: newEdge({ deltav: 130, name: 'kerbin_transfer-duna_transfer' }),
      duna_transfer_plane_change: newEdge({ deltav: 10, name: 'duna_transfer-plane_change' }),
      duna_transfer_duna_capture: newEdge({ deltav: 250, name: 'duna_transfer-duna_capture' }),
      duna_capture_low_duna_orbit: newEdge({ deltav: 360, name: 'duna_capture-low_duna_orbit' }),
      low_duna_orbit_duna_landing: newEdge({ deltav: 400, name: 'low_duna_orbit-duna_landing' }),

      duna_transfer_ike_transfer: newEdge({ deltav: 280, name: 'duna_transfer-ike_transfer' }),
      ike_transfer_plane_change: newEdge({ deltav: 0, name: 'ike_transfer-plane_change' }),
      ike_transfer_ike_capture: newEdge({ deltav: 30, name: 'ike_transfer-ike_capture' }),
      ike_capture_low_ike_orbit: newEdge({ deltav: 150, name: 'ike_capture-low_ike_orbit' }),
      low_ike_orbit_ike_landing: newEdge({ deltav: 390, name: 'low_ike_orbit-ike_landing' }),

      kerbin_transfer_dres_transfer: newEdge({ deltav: 610, name: 'kerbin_transfer-dres_transfer' }),
      dres_transfer_plane_change: newEdge({ deltav: 1010, name: 'dres_transfer-plane_change' }),
      dres_transfer_dres_capture: newEdge({ deltav: 1140, name: 'dres_transfer-dres_capture' }),
      dres_capture_low_dres_orbit: newEdge({ deltav: 150, name: 'dres_capture-low_dres_orbit' }),
      low_dres_orbit_dres_landing: newEdge({ deltav: 430, name: 'low_dres_orbit-dres_landing' }),

      kerbin_transfer_jool_transfer: newEdge({ deltav: 980, name: 'kerbin_transfer-jool_transfer' }),
      jool_transfer_plane_change: newEdge({ deltav: 270, name: 'jool_transfer-plane_change' }),
      jool_transfer_jool_capture: newEdge({ deltav: 160, name: 'jool_transfer-jool_capture' }),
      jool_capture_low_jool_orbit: newEdge({ deltav: 2810, name: 'jool_capture-low_jool_orbit' }),
      low_jool_orbit_jool_landing: newEdge({ deltav: 400, name: 'low_jool_orbit-jool_landing' }),

      jool_transfer_pol_transfer: newEdge({ deltav: 280, name: 'jool_transfer-pol_transfer' }),
      pol_transfer_plane_change: newEdge({ deltav: 700, name: 'pol_transfer-plane_change' }),
      pol_transfer_pol_capture: newEdge({ deltav: 160, name: 'pol_transfer-pol_capture' }),
      pol_capture_low_pol_orbit: newEdge({ deltav: 2810, name: 'pol_capture-low_pol_orbit' }),
      low_pol_orbit_pol_landing: newEdge({ deltav: 390, name: 'low_pol_orbit-pol_landing' })

      // kerbin_transfer_mercury_transfer: newEdge({ deltav: 2340, name: 'kerbin_transfer-mercury_transfer' }),
      // mercury_transfer_low_mercury_orbit: newEdge({ deltav: 7530, name: 'mercury_transfer-low_mercury_orbit' }),
      // low_mercury_orbit_mercury_landing: newEdge({ deltav: 3060, name: 'low_mercury_orbit-mercury_landing' }),

      // kerbin_transfer_mars_transfer: newEdge({ deltav: 1060, name: 'kerbin_transfer-mars_transfer' }),
      // mars_transfer_low_mars_orbit: newEdge({ deltav: 1440, name: 'mars_transfer-low_mars_orbit' }),
      // low_mars_orbit_mars_landing: newEdge({ deltav: 2000, name: 'low_mars_orbit-mars_landing' }),

      // mars_transfer_deimos_transfer: newEdge({ deltav: 340, name: 'mars_transfer-deimos_transfer' }),
      // deimos_transfer_low_deimos_orbit: newEdge({ deltav: 652, name: 'deimos_transfer-low_deimos_orbit' }),
      // low_deimos_orbit_deimos_landing: newEdge({ deltav: 4, name: 'low_deimos_orbit-deimos_landing' }),

      // mars_transfer_phobos_transfer: newEdge({ deltav: 740, name: 'mars_transfer-phobos_transfer'}),
      // phobos_transfer_low_phobos_orbit: newEdge({ deltav: 543, name: 'mars_transfer-phobos_transfer'}),
      // low_phobos_orbit_phobos_landing: newEdge({ deltav: 8, name: 'low_phobos_orbit-phobos_landing'}),

      // kerbin_transfer_jupiter_transfer: newEdge({ deltav: 3360, name: 'kerbin_transfer-jupiter_transfer' }),
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

      // kerbin_transfer_saturn_transfer: newEdge({ deltav: 4500, name: 'kerbin_transfer-saturn_transfer' }),
      // saturn_transfer_low_saturn_orbit: newEdge({ deltav: 10230, name: 'saturn_transfer-low_saturn_orbit' }),

      // saturn_transfer_titan_transfer: newEdge({ deltav: 3060, name: 'saturn_transfer-titan_transfer' }),
      // titan_transfer_low_titan_orbit: newEdge({ deltav: 660, name: 'titan_transfer-low_titan_orbit' }),
      // low_titan_orbit_titan_landing: newEdge({ deltav: 7600, name: 'low_titan_orbit-titan_landing' }),

      // kerbin_transfer_uranus_transfer: newEdge({ deltav: 5280, name: 'kerbin_transfer-uranus_transfer' }),
      // uranus_transfer_low_uranus_orbit: newEdge({ deltav: 6120, name: 'uranus_transfer-low_uranus_orbit' }),

      // kerbin_transfer_neptune_transfer: newEdge({ deltav: 5390, name: 'kerbin_transfer-neptune_transfer' }),
      // neptune_transfer_low_neptune_orbit: newEdge({ deltav: 6750, name: 'neptune_transfer-low_neptune_orbit' }),

      // kerbin_transfer_sun_transfer: newEdge({ deltav: 196080, name: 'kerbin_transfer-sun_transfer' }),
      // sun_transfer_low_sun_orbit: newEdge({ deltav: 636080, name: 'sun_transfer-low_sun_orbit' })
    };
  }

  buildGraph = (graph, edges, nodes) => {
    // kerbin
    graph.addEdge(edges.low_kerbin_orbit, nodes.kerbin, nodes.low_kerbin_orbit);

    graph.addEdge(edges.low_kerbin_orbit_keostationary_transfer, nodes.low_kerbin_orbit, nodes.keostationary_transfer);
    graph.addEdge(edges.keostationary_transfer_keo_orbit, nodes.keostationary_transfer, nodes.keostationary_orbit);

    graph.addEdge(edges.low_kerbin_orbit_mun_transfer, nodes.low_kerbin_orbit, nodes.mun_transfer);
    graph.addEdge(edges.mun_transfer_plane_change, nodes.mun_transfer, nodes.mun_plane_change);
    graph.addEdge(edges.mun_transfer_mun_capture, nodes.mun_transfer, nodes.mun_capture);
    graph.addEdge(edges.mun_capture_low_mun_orbit, nodes.mun_capture, nodes.low_mun_orbit);
    graph.addEdge(edges.low_mun_orbit_mun_landing, nodes.low_mun_orbit, nodes.mun);

    graph.addEdge(edges.low_kerbin_orbit_minmus_transfer, nodes.low_kerbin_orbit, nodes.minmus_transfer);
    graph.addEdge(edges.minmus_transfer_plane_change, nodes.minmus_transfer, nodes.minmus_plane_change);
    graph.addEdge(edges.minmus_transfer_minmus_capture, nodes.minmus_transfer, nodes.minmus_capture);
    graph.addEdge(edges.minmus_capture_low_minmus_orbit, nodes.minmus_capture, nodes.low_minmus_orbit);
    graph.addEdge(edges.low_minmus_orbit_minmus_landing, nodes.low_minmus_orbit, nodes.minmus);

    graph.addEdge(edges.low_kerbin_orbit_kerbin_transfer, nodes.low_kerbin_orbit, nodes.kerbin_transfer);
  };

  unwalkNodes = () => {
    for (let node in this.nodes) {
      this.nodes[node].visited = false;
    }
  };
};
