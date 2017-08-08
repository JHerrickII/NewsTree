import React, { Component } from 'react'
import * as d3 from 'd3'
//import * as thedata from "./mydata.json" //you could get external files, but better in React to pass as props

export default class ExternalData extends Component {

  componentDidMount() {

    //better to just pass as a prop // this.props.thedata
    var thedata = [
      {"name": "Maria", "age": 30},
      {"name": "Fred", "age": 50},
      {"name": "Francis", "age": 12}
    ]



      var canvas = d3.select("body").append("svg")
        .attr("width", 500)
        .attr("height", 500)

      canvas.selectAll("rect")
        .data(thedata)
        .enter()
          .append("rect")
          .attr("width", function(d){return d.age*10;})
          .attr("height", 48)
          .attr("y", function(d,i){return i*50})
          .attr("fill", "blue")

      canvas.selectAll("text")
        .data(thedata)
        .enter()
          .append("text")
          .attr("fill", "white")
          .attr("y", function(d,i){return (i*50+24);})
          .text(function(d){return d.name;})

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
