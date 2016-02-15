import React from 'react';

import NodeSelector from './node_selector';

import SolarSystem from '../maps/solar_system';
import Graph from '../graph/graph';
import KerbolSystem from '../maps/kerbol_system';

const START_NODE_ID = 'start-node';
const END_NODE_ID = 'end-node';

export default class Container extends React.Component {
  constructor() {
    super();
    const graph = new Graph();
    const solarSystem = new SolarSystem();

    solarSystem.buildGraph(graph, solarSystem.edges, solarSystem.nodes);

    this.state = {
      startNodeCurrentValue: "Low Earth Orbit",
      endNodeCurrentValue: "Moon",
      graph,
      solarSystem
    };
  }

  calculateDeltaV() {
    const underscoredStartNode = this.state.startNodeCurrentValue.toLowerCase().replace(/ /g, '_');
    const underscoredEndNode = this.state.endNodeCurrentValue.toLowerCase().replace(/ /g, '_');
    const solarSystem = this.state.solarSystem;

    console.log('walking:', underscoredStartNode, underscoredEndNode, solarSystem.nodes[underscoredStartNode])

    return this.state.graph.walk(solarSystem.nodes[underscoredStartNode], solarSystem.nodes[underscoredEndNode]);
  }

  handleChange = (event) => {
    const target = event.target;

    let objectKey = target.id === START_NODE_ID ? 'startNodeCurrentValue' : 'endNodeCurrentValue';
    let newState = {};

    newState[objectKey] = target.value;

    this.setState(newState);
    console.log('set state:', newState);

    this.state.solarSystem.unwalkNodes();
  };

  render() {
    const totalDeltaV = this.calculateDeltaV();
    return (
      <div>
        <h1>Hello, world!</h1>
        <form onSubmit={this.handleSubmit}>
          <NodeSelector id={START_NODE_ID} onChange={this.handleChange} nodes={this.state.solarSystem.nodes} defaultValue={this.state.startNodeCurrentValue} />
          <NodeSelector id={END_NODE_ID} onChange={this.handleChange} nodes={this.state.solarSystem.nodes} defaultValue={this.state.endNodeCurrentValue} />
        </form>
        <div>
          <h3>Total Delta V Cost</h3>
          {totalDeltaV}
        </div>
      </div>
    );
  }
};
