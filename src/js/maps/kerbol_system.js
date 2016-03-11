import Node from '../graph/node';
import Edge from '../graph/edge';

let newEdge = function(options) {
  return new Edge(options.deltav, options.name);
};

export default class KerbolSystem {
  constructor() {
    this.defaultStartNode = "Kerbin";
    this.defaultEndNode = "Keostationary Orbit";

    this.nodes = {
      kerbin: new Node('Kerbin'),
      low_kerbin_orbit: new Node('Low Kerbin Orbit'),
      keostationary_transfer: new Node('Keostationary Transfer'),
      keostationary_orbit: new Node('Keostationary Orbit'),
      kerbin_transfer: new Node('Kerbin Transfer'),

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
      kerbol: new Node('Kerbol'),

      kerbol_escape: new Node('Kerbol Escape')
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
      pol_transfer_pol_capture: newEdge({ deltav: 770, name: 'pol_transfer-pol_capture' }),
      pol_capture_low_pol_orbit: newEdge({ deltav: 50, name: 'pol_capture-low_pol_orbit' }),
      low_pol_orbit_pol_landing: newEdge({ deltav: 130, name: 'low_pol_orbit-pol_landing' }),

      jool_transfer_bop_transfer: newEdge({ deltav: 380, name: 'jool_transfer-bop_transfer' }),
      bop_transfer_plane_change: newEdge({ deltav: 2440, name: 'bop_transfer-plane_change' }),
      bop_transfer_bop_capture: newEdge({ deltav: 830, name: 'bop_transfer-bop_capture' }),
      bop_capture_low_bop_orbit: newEdge({ deltav: 70, name: 'bop_capture-low_bop_orbit' }),
      low_bop_orbit_bop_landing: newEdge({ deltav: 220, name: 'low_bop_orbit-bop_landing' }),

      jool_transfer_tylo_transfer: newEdge({ deltav: 540, name: 'jool_transfer-tylo_transfer' }),
      tylo_transfer_plane_change: newEdge({ deltav: 0, name: 'tylo_transfer-plane_change' }),
      tylo_transfer_tylo_capture: newEdge({ deltav: 240, name: 'tylo_transfer-tylo_capture' }),
      tylo_capture_low_tylo_orbit: newEdge({ deltav: 860, name: 'tylo_capture-low_tylo_orbit' }),
      low_tylo_orbit_tylo_landing: newEdge({ deltav: 2800, name: 'low_tylo_orbit-tylo_landing' }),

      jool_transfer_vall_transfer: newEdge({ deltav: 780, name: 'jool_transfer-vall_transfer' }),
      vall_transfer_plane_change: newEdge({ deltav: 0, name: 'vall_transfer-plane_change' }),
      vall_transfer_vall_capture: newEdge({ deltav: 580, name: 'vall_transfer-vall_capture' }),
      vall_capture_low_vall_orbit: newEdge({ deltav: 330, name: 'vall_capture-low_vall_orbit' }),
      low_vall_orbit_vall_landing: newEdge({ deltav: 860, name: 'low_vall_orbit-vall_landing' }),

      jool_transfer_laythe_transfer: newEdge({ deltav: 1090, name: 'jool_transfer-laythe_transfer' }),
      laythe_transfer_plane_change: newEdge({ deltav: 0, name: 'laythe_transfer-plane_change' }),
      laythe_transfer_laythe_capture: newEdge({ deltav: 290, name: 'laythe_transfer-laythe_capture' }),
      laythe_capture_low_laythe_orbit: newEdge({ deltav: 780, name: 'laythe_capture-low_laythe_orbit' }),
      low_laythe_orbit_laythe_landing: newEdge({ deltav: 2900, name: 'low_laythe_orbit-laythe_landing' }),

      kerbin_transfer_eeloo_transfer: newEdge({ deltav: 1140, name: 'kerbin_transfer-eeloo_transfer' }),
      eeloo_transfer_plane_change: newEdge({ deltav: 1330, name: 'eeloo_transfer-plane_change' }),
      eeloo_transfer_eeloo_capture: newEdge({ deltav: 1130, name: 'eeloo_transfer-eeloo_capture' }),
      eeloo_capture_low_eeloo_orbit: newEdge({ deltav: 240, name: 'eeloo_capture-low_eeloo_orbit' }),
      low_eeloo_orbit_eeloo_landing: newEdge({ deltav: 620, name: 'low_eeloo_orbit-eeloo_landing' }),

      kerbin_transfer_kerbol_transfer: newEdge({ deltav: 5910, name: 'kerbin_transfer-kerbol_transfer' }),
      kerbol_transfer_plane_change: newEdge({ deltav: 0, name: 'kerbol_transfer-plane_change' }),
      kerbol_transfer_kerbol_capture: newEdge({ deltav: 26820, name: 'kerbol_transfer-kerbol_capture' }),
      kerbol_capture_low_kerbol_orbit: newEdge({ deltav: 67000, name: 'kerbol_capture-low_kerbol_orbit' }),
      low_kerbol_orbit_kerbol_landing: newEdge({ deltav: 0, name: 'low_kerbol_orbit-kerbol_landing' }),

      kerbin_transfer_kerbol_escape: newEdge({ deltav: 1790, name: 'kerbin_transfer-kerbol_escape' })
    };
  }

  buildGraph = (graph, edges, nodes) => {
    // kerbin
    graph.addEdge(edges.low_kerbin_orbit, nodes.kerbin, nodes.low_kerbin_orbit);

    graph.addEdge(edges.low_kerbin_orbit_keostationary_transfer, nodes.low_kerbin_orbit, nodes.keostationary_transfer);
    graph.addEdge(edges.keostationary_transfer_keo_orbit, nodes.keostationary_transfer, nodes.keostationary_orbit);

    graph.addEdge(edges.low_kerbin_orbit_mun_transfer, nodes.low_kerbin_orbit, nodes.mun_transfer);
    graph.addEdge(edges.mun_transfer_plane_change, nodes.mun_transfer, nodes.mun_plane_change.addMeta({ isPlaneChange: true }));
    graph.addEdge(edges.mun_transfer_mun_capture, nodes.mun_transfer, nodes.mun_capture);
    graph.addEdge(edges.mun_capture_low_mun_orbit, nodes.mun_capture, nodes.low_mun_orbit);
    graph.addEdge(edges.low_mun_orbit_mun_landing, nodes.low_mun_orbit, nodes.mun);

    graph.addEdge(edges.low_kerbin_orbit_minmus_transfer, nodes.low_kerbin_orbit, nodes.minmus_transfer);
    graph.addEdge(edges.minmus_transfer_plane_change, nodes.minmus_transfer, nodes.minmus_plane_change.addMeta({ isPlaneChange: true }));
    graph.addEdge(edges.minmus_transfer_minmus_capture, nodes.minmus_transfer, nodes.minmus_capture);
    graph.addEdge(edges.minmus_capture_low_minmus_orbit, nodes.minmus_capture, nodes.low_minmus_orbit);
    graph.addEdge(edges.low_minmus_orbit_minmus_landing, nodes.low_minmus_orbit, nodes.minmus);

    graph.addEdge(edges.low_kerbin_orbit_kerbin_transfer, nodes.low_kerbin_orbit, nodes.kerbin_transfer);

    graph.addEdge(edges.kerbin_transfer_duna_transfer, nodes.kerbin_transfer, nodes.duna_transfer);
    graph.addEdge(edges.duna_transfer_plane_change, nodes.duna_transfer, nodes.duna_plane_change.addMeta({ isPlaneChange: true }));
    graph.addEdge(edges.duna_transfer_duna_capture, nodes.duna_transfer, nodes.duna_capture);
    graph.addEdge(edges.duna_capture_low_duna_orbit, nodes.duna_capture, nodes.low_duna_orbit);
    graph.addEdge(edges.low_duna_orbit_duna_landing, nodes.low_duna_orbit, nodes.duna);

    graph.addEdge(edges.duna_transfer_ike_transfer, nodes.duna_transfer, nodes.ike_transfer);
    graph.addEdge(edges.ike_transfer_plane_change, nodes.ike_transfer, nodes.ike_plane_change.addMeta({ isPlaneChange: true }));
    graph.addEdge(edges.ike_transfer_ike_capture, nodes.ike_transfer, nodes.ike_capture);
    graph.addEdge(edges.ike_capture_low_ike_orbit, nodes.ike_capture, nodes.low_ike_orbit);
    graph.addEdge(edges.low_ike_orbit_ike_landing, nodes.low_ike_orbit, nodes.ike);

    graph.addEdge(edges.kerbin_transfer_dres_transfer, nodes.kerbin_transfer, nodes.dres_transfer);
    graph.addEdge(edges.dres_transfer_plane_change, nodes.dres_transfer, nodes.dres_plane_change.addMeta({ isPlaneChange: true }));
    graph.addEdge(edges.dres_transfer_dres_capture, nodes.dres_transfer, nodes.dres_capture);
    graph.addEdge(edges.dres_capture_low_dres_orbit, nodes.dres_capture, nodes.low_dres_orbit);
    graph.addEdge(edges.low_dres_orbit_dres_landing, nodes.low_dres_orbit, nodes.dres);

    graph.addEdge(edges.kerbin_transfer_jool_transfer, nodes.kerbin_transfer, nodes.jool_transfer);
    graph.addEdge(edges.jool_transfer_plane_change, nodes.jool_transfer, nodes.jool_plane_change.addMeta({ isPlaneChange: true }));
    graph.addEdge(edges.jool_transfer_jool_capture, nodes.jool_transfer, nodes.jool_capture);
    graph.addEdge(edges.jool_capture_low_jool_orbit, nodes.jool_capture, nodes.low_jool_orbit);
    graph.addEdge(edges.low_jool_orbit_jool_landing, nodes.low_jool_orbit, nodes.jool);

    graph.addEdge(edges.jool_transfer_pol_transfer, nodes.jool_transfer, nodes.pol_transfer);
    graph.addEdge(edges.pol_transfer_plane_change, nodes.pol_transfer, nodes.pol_plane_change.addMeta({ isPlaneChange: true }));
    graph.addEdge(edges.pol_transfer_pol_capture, nodes.pol_transfer, nodes.pol_capture);
    graph.addEdge(edges.pol_capture_low_pol_orbit, nodes.pol_capture, nodes.low_pol_orbit);
    graph.addEdge(edges.low_pol_orbit_pol_landing, nodes.low_pol_orbit, nodes.pol);

    graph.addEdge(edges.jool_transfer_bop_transfer, nodes.jool_transfer, nodes.bop_transfer);
    graph.addEdge(edges.bop_transfer_plane_change, nodes.bop_transfer, nodes.bop_plane_change.addMeta({ isPlaneChange: true }));
    graph.addEdge(edges.bop_transfer_bop_capture, nodes.bop_transfer, nodes.bop_capture);
    graph.addEdge(edges.bop_capture_low_bop_orbit, nodes.bop_capture, nodes.low_bop_orbit);
    graph.addEdge(edges.low_bop_orbit_bop_landing, nodes.low_bop_orbit, nodes.bop);

    graph.addEdge(edges.jool_transfer_tylo_transfer, nodes.jool_transfer, nodes.tylo_transfer);
    graph.addEdge(edges.tylo_transfer_plane_change, nodes.tylo_transfer, nodes.tylo_plane_change.addMeta({ isPlaneChange: true }));
    graph.addEdge(edges.tylo_transfer_tylo_capture, nodes.tylo_transfer, nodes.tylo_capture);
    graph.addEdge(edges.tylo_capture_low_tylo_orbit, nodes.tylo_capture, nodes.low_tylo_orbit);
    graph.addEdge(edges.low_tylo_orbit_tylo_landing, nodes.low_tylo_orbit, nodes.tylo);

    graph.addEdge(edges.jool_transfer_vall_transfer, nodes.jool_transfer, nodes.vall_transfer);
    graph.addEdge(edges.vall_transfer_plane_change, nodes.vall_transfer, nodes.vall_plane_change.addMeta({ isPlaneChange: true }));
    graph.addEdge(edges.vall_transfer_vall_capture, nodes.vall_transfer, nodes.vall_capture);
    graph.addEdge(edges.vall_capture_low_vall_orbit, nodes.vall_capture, nodes.low_vall_orbit);
    graph.addEdge(edges.low_vall_orbit_vall_landing, nodes.low_vall_orbit, nodes.vall);

    graph.addEdge(edges.jool_transfer_laythe_transfer, nodes.jool_transfer, nodes.laythe_transfer);
    graph.addEdge(edges.laythe_transfer_plane_change, nodes.laythe_transfer, nodes.laythe_plane_change.addMeta({ isPlaneChange: true }));
    graph.addEdge(edges.laythe_transfer_laythe_capture, nodes.laythe_transfer, nodes.laythe_capture);
    graph.addEdge(edges.laythe_capture_low_laythe_orbit, nodes.laythe_capture, nodes.low_laythe_orbit);
    graph.addEdge(edges.low_laythe_orbit_laythe_landing, nodes.low_laythe_orbit, nodes.laythe);

    graph.addEdge(edges.kerbin_transfer_eeloo_transfer, nodes.kerbin_transfer, nodes.eeloo_transfer);
    graph.addEdge(edges.eeloo_transfer_plane_change, nodes.eeloo_transfer, nodes.eeloo_plane_change.addMeta({ isPlaneChange: true }));
    graph.addEdge(edges.eeloo_transfer_eeloo_capture, nodes.eeloo_transfer, nodes.eeloo_capture);
    graph.addEdge(edges.eeloo_capture_low_eeloo_orbit, nodes.eeloo_capture, nodes.low_eeloo_orbit);
    graph.addEdge(edges.low_eeloo_orbit_eeloo_landing, nodes.low_eeloo_orbit, nodes.eeloo);

    graph.addEdge(edges.kerbin_transfer_eve_transfer, nodes.kerbin_transfer, nodes.eve_transfer);
    graph.addEdge(edges.eve_transfer_plane_change, nodes.eve_transfer, nodes.eve_plane_change.addMeta({ isPlaneChange: true }));
    graph.addEdge(edges.eve_transfer_eve_capture, nodes.eve_transfer, nodes.eve_capture);
    graph.addEdge(edges.eve_capture_low_eve_orbit, nodes.eve_capture, nodes.low_eve_orbit);
    graph.addEdge(edges.low_eve_orbit_eve_landing, nodes.low_eve_orbit, nodes.eve);

    graph.addEdge(edges.eve_transfer_gilly_transfer, nodes.eve_transfer, nodes.gilly_transfer);
    graph.addEdge(edges.gilly_transfer_plane_change, nodes.gilly_transfer, nodes.gilly_plane_change.addMeta({ isPlaneChange: true }));
    graph.addEdge(edges.gilly_transfer_gilly_capture, nodes.gilly_transfer, nodes.gilly_capture);
    graph.addEdge(edges.gilly_capture_low_gilly_orbit, nodes.gilly_capture, nodes.low_gilly_orbit);
    graph.addEdge(edges.low_gilly_orbit_gilly_landing, nodes.low_gilly_orbit, nodes.gilly);

    graph.addEdge(edges.kerbin_transfer_moho_transfer, nodes.kerbin_transfer, nodes.moho_transfer);
    graph.addEdge(edges.moho_transfer_plane_change, nodes.moho_transfer, nodes.moho_plane_change.addMeta({ isPlaneChange: true }));
    graph.addEdge(edges.moho_transfer_moho_capture, nodes.moho_transfer, nodes.moho_capture);
    graph.addEdge(edges.moho_capture_low_moho_orbit, nodes.moho_capture, nodes.low_moho_orbit);
    graph.addEdge(edges.low_moho_orbit_moho_landing, nodes.low_moho_orbit, nodes.moho);

    graph.addEdge(edges.kerbin_transfer_kerbol_transfer, nodes.kerbin_transfer, nodes.kerbol_transfer);
    graph.addEdge(edges.kerbol_transfer_plane_change, nodes.kerbol_transfer, nodes.kerbol_plane_change.addMeta({ isPlaneChange: true }));
    graph.addEdge(edges.kerbol_transfer_kerbol_capture, nodes.kerbol_transfer, nodes.kerbol_capture);
    graph.addEdge(edges.kerbol_capture_low_kerbol_orbit, nodes.kerbol_capture, nodes.low_kerbol_orbit);
    graph.addEdge(edges.low_kerbol_orbit_kerbol_landing, nodes.low_kerbol_orbit, nodes.kerbol);

    graph.addEdge(edges.kerbin_transfer_kerbol_escape, nodes.kerbin_transfer, nodes.kerbol_escape);
  };

  unwalkNodes = () => {
    for (let node in this.nodes) {
      this.nodes[node].visited = false;
    }
  };
};
