export default class Edge {
  constructor(value, name) {
    this.value = value;
    this.name = name;

    this.id = name + '-' + value;
    this.nodes = {};
  }

  add = (source, destination) => {
    this.nodes = {};

    this.nodes = {
      head: source,
      tail: destination
    };
  };
};
