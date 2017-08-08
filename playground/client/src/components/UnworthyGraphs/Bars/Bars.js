import React, { Component } from 'react'
import * as d3 from 'd3'

export default class Bars extends Component {

  componentDidMount() {
    var dateArray = [20, 40, 50, 60];
    var width = 500;
    var height = 500;

    var widthScale = d3.scaleLinear()
      .domain([0,60])
      .range([0,width]);

    var color = d3.scaleLinear()
      .domain([0,60])
      .range(["red", "blue"]);

    var axis = d3.axisBottom(widthScale)
      .ticks(5);

    var canvas = d3.select("body")
      .append("svg")
      .attr("width",width)
      .attr("height", height)
      .append("g")//g tags groups together the elements in the canvas
      .attr("transform", "translate(20, 0)");

    var bars = canvas.selectAll("rect")//selectAll selects all argument elements already on the DOM
      .data(dateArray)//binds data from dateArray to DOM elements, one by one
      .enter()//contains placeholders for all data elements that do not have corresponding DOM elements
        .append("rect")
        .attr("width", function(d) {return widthScale(d);})
        .attr("height", 50)
        .attr("fill", function(d){return color(d);})
        .attr("y", function(d,i) {return i*100});


    canvas.append("g")
      .attr("transform", "translate(0,400)")
      .call(axis);

  }


  componentWillUnmount(){
    d3.select("svg").remove();
  }

  render() {
    return(
      <div id="bars" />
    );
  }

}
