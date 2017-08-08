import React, { Component } from 'react'
import * as d3 from 'd3'

export default class Paths extends Component {

  componentDidMount() {
    var canvas = d3.select("body").append("svg")
      .attr("width", 500)
      .attr("height", 500);

    var data = [
      {x:10, y: 20},
      {x:40, y: 60},
      {x:50, y: 70}
    ];

    var group = canvas.append("g")
      .attr("transform", "translate(100,100)");

    var line = d3.line()
      .x(function(d) {return d.x;})
      .y(function(d) {return d.y;});

    group.selectAll("path")
      .data([data])
      .enter()
      .append("path")
      .attr("d", line)
      .attr("fill", "red")
      .attr("stroke", "#000")
      .attr("stroke-width", 10);


  }

  componentWillUnmount(){
    d3.select("svg").remove();
  }

  render() {
    return(
      <div id="path" />
    );
  }

}
