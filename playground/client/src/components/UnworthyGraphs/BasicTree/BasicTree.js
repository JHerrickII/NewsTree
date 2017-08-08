import React, { Component } from 'react'
import * as d3 from 'd3'

export default class BasicTree extends Component {

  componentDidMount() {
    var data = [];

    var margin = {top: 40, right: 90, bottom: 50, left: 90};
    var width = 1500;
    var height = 1500;

    var svg = d3.select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height)

    var g = svg.append()
      .attr('transform',
            'translate(' + margin.left + ',' + margin.top + ')');

    var tree = d3.tree()
      .size([width, height]);

    var nodes = d3.hierarchy(data);

    nodes = tree(nodes);

    




  }

  componentWillUnmount(){
    d3.select("svg").remove();
  }

  render() {
    return(
      <div id="basicTree" />
    );
  }

}
