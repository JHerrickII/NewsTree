import React, { Component } from 'react'
import * as d3 from 'd3'

export default class MovingCircles extends Component {

  componentDidMount() {

    var canvas = d3.select("body")
      .append("svg")
      .attr("width", 500)
      .attr("height", 500)
      .attr("transform", "translate(200, 200)");

    var circle = canvas.append("circle")
      .attr("cx", 50)
      .attr("cy", 50)
      .attr("r",25);

    circle.transition()
      .duration(1500)
      .delay(2000)
      .attr("cy", 150)
      .attr("cx", 150)
      .on("end", function(){d3.select(this).attr("fill","red");});//at the end of transition, do this function
      // .transition()
      // .attr("cx",-2);


  }

  componentWillUnmount(){
    d3.select("svg").remove();
  }

  render() {
    return(
      <div id="movingcircles" />
    );
  }

}
