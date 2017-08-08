import React, { Component } from 'react'
import * as d3 from 'd3'

export default class PieLayout extends Component {

  componentDidMount() {
    var canvas = d3.select("body").append("svg")
      .attr("width", 1500)
      .attr("height", 1500);

      var group = canvas.append("g")
        .attr("transform", "translate(300,300)");

    var data = [10,50,80];
    var r = 300;

    var color = d3.scaleOrdinal()
      .range(["red", "blue", "orange"]);

    var arc = d3.arc()
      .innerRadius(0)
      .outerRadius(r);

    var pie = d3.pie()
      .value(function(d) {return d;});

    var arcs = group.selectAll(".arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs.append("path")
      .attr("d", arc)
      .attr("fill", function(d){return color(d.data);});

    arcs.append("text")
      .attr("transform", function(d){return "translate(" + arc.centroid(d) + ")"})
      .attr("text-anchor", "middle")
      .attr("font-size", "1.5em")
      .text(function(d){return d.data;})

  }

  componentWillUnmount(){
    d3.select("svg").remove();
  }

  render() {
    return(
      <div id="pieLayout" />
    );
  }

}
