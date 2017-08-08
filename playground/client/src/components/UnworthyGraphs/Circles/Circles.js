import React, { Component } from 'react'
import * as d3 from 'd3'

export default class Circles extends Component {

  componentDidMount() {
    var data = [10,2,2,2];

    var canvas = d3.select("body")
      .append("svg")
      .attr("width", 500)
      .attr("height", 500)
      .attr("transform", "translate(200, 200)");

    var circle1 = canvas.append("circle")
      .attr("cx", 50)
      .attr("cy", 0)
      .attr("r",25);

    // var circle2 = canvas.append("circle")
    //   .attr("cx", 50)
    //   .attr("cy", 200)
    //   .attr("r",25);
    //
    // var circle3 = canvas.append("circle")
    //   .attr("cx", 50)
    //   .attr("cy", 300)
    //   .attr("r",25);

    var circles = canvas.selectAll("circle")//selectAll selects all argument elements already on the DOM
      .data(data)//binds data from dateArray to DOM elements, one by one
      //*******for exit()***********
      // .attr("fill", "green")
      // .exit()
      //   .attr("fill", "blue");

      //*******for enter()***********
      .attr("fill","red")
      .enter()//contains placeholders for all data elements that do not have corresponding DOM elements
        .append("circle")
        .attr("cx", 50)
        .attr("cy", 50)
        .attr("fill", "green")
        .attr("r",25)
      .attr("cy", function(d,i) {return i*100});

        //enter() data > dom "Append these new ones to fit each unmatched data and follow styling"
        //update() data = dom
        //exit() dom > data "Fill the rest on screen"
  }

  componentWillUnmount(){
    d3.select("svg").remove();
  }

  render() {
    return(
      <div id="circles" />
    );
  }

}
