import React from 'react';

export default class NodeSelector extends React.Component {
  render() {
    const options = Object.keys(this.props.nodes).map(key => {
      const node = this.props.nodes[key];
      return (<option value={node.name} key={node.name}>{node.name}</option>)
    });

    return (
      <select id={this.props.id} onChange={this.props.onChange} value={this.props.defaultValue}>
        {options}
      </select>
    );
  }
};
