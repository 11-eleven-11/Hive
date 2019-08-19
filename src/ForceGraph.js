import React, { Component } from "react";
import Graph from "react-graph-vis";

class ForceGraph extends Component {
  constructor() {
    super();
    this.state = {
      options: {
        layout: {
         hierarchical: true,
        },
        edges: {
          color: "#000000"
        },
        nodes: {
          color: "#888f99",
          shape: "box"
        },
        physics: {
          enabled: true
        },
        interaction: { multiselect: true, dragView: true }
      },
      graph: {
        nodes: [
          { id: 1, label: "Reddit.com" },
          { id: 2, label: "Node 2" },
          { id: 3, label: "Node 3" },
          { id: 4, label: "Node 4" },
          { id: 5, label: "Node 5" },
          { id: 6, label: "Fox" },
          { id: 7, label: "Coindesk" },
          { id: 8, label: "Guardian" },
          { id: 9, label: "CNN" }
        ],
        edges: [
          { from: 1, to: 2 },
          { from: 1, to: 3 },
          { from: 2, to: 4 },
          { from: 2, to: 5 },
          { from: 1, to: 3 },
          { from: 3, to: 7 },
          { from: 7, to: 8 },
          { from: 6, to: 8 },
          { from: 7, to: 9 }

        ]
      }
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", e => {});
    document.addEventListener("mousemove", e => {});
  }

  events = {
    dragStart: event => {},
    dragEnd: event => {}
  };

  render() {
    return (
      <div id="graph" style={{ height: "100vh", width: '28vw'}}>
        <Graph
          graph={this.state.graph}
          options={this.state.options}
          events={this.state.events}
        />
      </div>
    );
  }
}

export default ForceGraph;