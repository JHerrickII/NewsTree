import React, { Component } from 'react'
import * as d3 from 'd3'

export default class Arcs extends Component {

  componentDidMount() {
    var canvas = d3.select("body").append("svg")
      .attr("width", 500)
      .attr("height", 500);

    var group = canvas.append("g")
      .attr("transform", "translate(100,100)");

    var r = 100;
    var p = Math.PI * 2;

    var arc = d3.arc()
      .innerRadius(r-20)
      .outerRadius(r)
      .startAngle(0)
      .endAngle(p-1)

    group.append("path")
      .attr("d",arc)


  }

  componentWillUnmount(){
    d3.select("svg").remove();
  }

  render() {
    return(
      <div id="arcs" />
    );
  }

}
