import React, { Component } from 'react'
import * as d3 from 'd3'

export default class ChordDiagram extends Component {

  componentDidMount() {

    var data =
      {
       "name": "Article Topics",
       "children": [
        {
         "name": "analytics",
         "children": [
          {
           "name": "cluster",
           "children": [
            {"name": "AgglomerativeCluster"},
            {"name": "CommunityStructure", "numbs": 3812},
            {"name": "HierarchicalCluster", "numbs": 6714},
            {"name": "MergeEdge", "numbs": 743}
           ]
          },
          {
           "name": "graph",
           "children": [
            {"name": "BetweennessCentrality", "numbs": 3534},
            {"name": "LinkDistance", "numbs": 5731},
            {"name": "MaxFlowMinCut", "numbs": 7840},
            {"name": "ShortestPaths", "numbs": 5914},
            {"name": "SpanningTree", "numbs": 3416}
           ]
          },
          {
           "name": "optimization",
           "children": [
            {"name": "AspectRatioBanker", "numbs": 7074}
           ]
          }
         ]
        },
        {
         "name": "animate",
         "children": [
          {"name": "Easing", "numbs": 17010},
          {"name": "FunctionSequence", "numbs": 5842},
          {
           "name": "interpolate",
           "children": [
            {"name": "ArrayInterpolator", "numbs": 1983},
            {"name": "ColorInterpolator", "numbs": 2047},
            {"name": "DateInterpolator", "numbs": 1375},
            {"name": "Interpolator", "numbs": 8746},
            {"name": "MatrixInterpolator", "numbs": 2202},
            {"name": "NumberInterpolator", "numbs": 1382},
            {"name": "ObjectInterpolator", "numbs": 1629},
            {"name": "PointInterpolator", "numbs": 1675},
            {"name": "RectangleInterpolator", "numbs": 2042}
           ]
          },
          {"name": "ISchedulable", "numbs": 1041},
          {"name": "Parallel", "numbs": 5176},
          {"name": "Pause", "numbs": 449},
          {"name": "Scheduler", "numbs": 5593},
          {"name": "Sequence", "numbs": 5534},
          {"name": "Transition", "numbs": 9201},
          {"name": "Transitioner", "numbs": 19975},
          {"name": "TransitionEvent", "numbs": 1116},
          {"name": "Tween", "numbs": 6006}
         ]
        },
        {
         "name": "data",
         "children": [
          {
           "name": "converters",
           "children": [
            {"name": "Converters", "numbs": 721},
            {"name": "DelimitedTextConverter", "numbs": 4294},
            {"name": "GraphMLConverter", "numbs": 9800},
            {"name": "IDataConverter", "numbs": 1314},
            {"name": "JSONConverter", "numbs": 2220}
           ]
          },
          {"name": "DataField", "numbs": 1759},
          {"name": "DataSchema", "numbs": 2165},
          {"name": "DataSet", "numbs": 586},
          {"name": "DataSource", "numbs": 3331},
          {"name": "DataTable", "numbs": 772},
          {"name": "DataUtil", "numbs": 3322}
         ]
        },
        {
         "name": "display",
         "children": [
          {"name": "DirtySprite", "numbs": 8833},
          {"name": "LineSprite", "numbs": 1732},
          {"name": "RectSprite", "numbs": 3623},
          {"name": "TextSprite", "numbs": 10066}
         ]
        },
        {
         "name": "flex",
         "children": [
          {"name": "FlareVis", "numbs": 4116}
         ]
        },
        {
         "name": "physics",
         "children": [
          {"name": "DragForce", "numbs": 1082},
          {"name": "GravityForce", "numbs": 1336},
          {"name": "IForce", "numbs": 319},
          {"name": "NBodyForce", "numbs": 10498},
          {"name": "Particle", "numbs": 2822},
          {"name": "Simulation", "numbs": 9983},
          {"name": "Spring", "numbs": 2213},
          {"name": "SpringForce", "numbs": 1681}
         ]
        },
        {
         "name": "query",
         "children": [
          {"name": "AggregateExpression", "numbs": 1616},
          {"name": "And", "numbs": 1027},
          {"name": "Arithmetic", "numbs": 3891},
          {"name": "Average", "numbs": 891},
          {"name": "BinaryExpression", "numbs": 2893},
          {"name": "Comparison", "numbs": 5103},
          {"name": "CompositeExpression", "numbs": 3677},
          {"name": "Count", "numbs": 781},
          {"name": "DateUtil", "numbs": 4141},
          {"name": "Distinct", "numbs": 933},
          {"name": "Expression", "numbs": 5130},
          {"name": "ExpressionIterator", "numbs": 3617},
          {"name": "Fn", "numbs": 3240},
          {"name": "If", "numbs": 2732},
          {"name": "IsA", "numbs": 2039},
          {"name": "Literal", "numbs": 1214},
          {"name": "Match", "numbs": 3748},
          {"name": "Maximum", "numbs": 843},
          {
           "name": "methods",
           "children": [
            {"name": "add", "numbs": 593},
            {"name": "and", "numbs": 330},
            {"name": "average", "numbs": 287},
            {"name": "count", "numbs": 277},
            {"name": "distinct", "numbs": 292},
            {"name": "div", "numbs": 595},
            {"name": "eq", "numbs": 594},
            {"name": "fn", "numbs": 460},
            {"name": "gt", "numbs": 603},
            {"name": "gte", "numbs": 625},
            {"name": "iff", "numbs": 748},
            {"name": "isa", "numbs": 461},
            {"name": "lt", "numbs": 597},
            {"name": "lte", "numbs": 619},
            {"name": "max", "numbs": 283},
            {"name": "min", "numbs": 283},
            {"name": "mod", "numbs": 591},
            {"name": "mul", "numbs": 603},
            {"name": "neq", "numbs": 599},
            {"name": "not", "numbs": 386},
            {"name": "or", "numbs": 323},
            {"name": "orderby", "numbs": 307},
            {"name": "range", "numbs": 772},
            {"name": "select", "numbs": 296},
            {"name": "stddev", "numbs": 363},
            {"name": "sub", "numbs": 600},
            {"name": "sum", "numbs": 280},
            {"name": "update", "numbs": 307},
            {"name": "variance", "numbs": 335},
            {"name": "where", "numbs": 299},
            {"name": "xor", "numbs": 354},
            {"name": "_", "numbs": 264}
           ]
          },
          {"name": "Minimum", "numbs": 843},
          {"name": "Not", "numbs": 1554},
          {"name": "Or", "numbs": 970},
          {"name": "Query", "numbs": 13896},
          {"name": "Range", "numbs": 1594},
          {"name": "StringUtil", "numbs": 4130},
          {"name": "Sum", "numbs": 791},
          {"name": "Variable", "numbs": 1124},
          {"name": "Variance", "numbs": 1876},
          {"name": "Xor", "numbs": 1101}
         ]
        },
        {
         "name": "scale",
         "children": [
          {"name": "IScaleMap", "numbs": 2105},
          {"name": "LinearScale", "numbs": 1316},
          {"name": "LogScale", "numbs": 3151},
          {"name": "OrdinalScale", "numbs": 3770},
          {"name": "QuantileScale", "numbs": 2435},
          {"name": "QuantitativeScale", "numbs": 4839},
          {"name": "RootScale", "numbs": 1756},
          {"name": "Scale", "numbs": 4268},
          {"name": "ScaleType", "numbs": 1821},
          {"name": "TimeScale", "numbs": 5833}
         ]
        },
        {
         "name": "util",
         "children": [
          {"name": "Arrays", "numbs": 8258},
          {"name": "Colors", "numbs": 10001},
          {"name": "Dates", "numbs": 8217},
          {"name": "Displays", "numbs": 12555},
          {"name": "Filter", "numbs": 2324},
          {"name": "Geometry", "numbs": 10993},
          {
           "name": "heap",
           "children": [
            {"name": "FibonacciHeap", "numbs": 9354},
            {"name": "HeapNode", "numbs": 1233}
           ]
          },
          {"name": "IEvaluable", "numbs": 335},
          {"name": "IPredicate", "numbs": 383},
          {"name": "IValueProxy", "numbs": 874},
          {
           "name": "math",
           "children": [
            {"name": "DenseMatrix", "numbs": 3165},
            {"name": "IMatrix", "numbs": 2815},
            {"name": "SparseMatrix", "numbs": 3366}
           ]
          },
          {"name": "Maths", "numbs": 17705},
          {"name": "Orientation", "numbs": 1486},
          {
           "name": "palette",
           "children": [
            {"name": "ColorPalette", "numbs": 6367},
            {"name": "Palette", "numbs": 1229},
            {"name": "ShapePalette", "numbs": 2059},
            {"name": "numbsPalette", "numbs": 2291}
           ]
          },
          {"name": "Property", "numbs": 5559},
          {"name": "Shapes", "numbs": 19118},
          {"name": "Sort", "numbs": 6887},
          {"name": "Stats", "numbs": 6557},
          {"name": "Strings", "numbs": 22026}
         ]
        },
        {
         "name": "vis",
         "children": [
          {
           "name": "axis",
           "children": [
            {"name": "Axes", "numbs": 1302},
            {"name": "Axis", "numbs": 24593},
            {"name": "AxisGridLine", "numbs": 652},
            {"name": "AxisLabel", "numbs": 636},
            {"name": "CartesianAxes", "numbs": 6703}
           ]
          },
          {
           "name": "controls",
           "children": [
            {"name": "AnchorControl", "numbs": 2138},
            {"name": "ClickControl", "numbs": 3824},
            {"name": "Control", "numbs": 1353},
            {"name": "ControlList", "numbs": 4665},
            {"name": "DragControl", "numbs": 2649},
            {"name": "ExpandControl", "numbs": 2832},
            {"name": "HoverControl", "numbs": 4896},
            {"name": "IControl", "numbs": 763},
            {"name": "PanZoomControl", "numbs": 5222},
            {"name": "SelectionControl", "numbs": 7862},
            {"name": "TooltipControl", "numbs": 8435}
           ]
          },
          {
           "name": "data",
           "children": [
            {"name": "Data", "numbs": 20544},
            {"name": "DataList", "numbs": 19788},
            {"name": "DataSprite", "numbs": 10349},
            {"name": "EdgeSprite", "numbs": 3301},
            {"name": "NodeSprite", "numbs": 19382},
            {
             "name": "render",
             "children": [
              {"name": "ArrowType", "numbs": 698},
              {"name": "EdgeRenderer", "numbs": 5569},
              {"name": "IRenderer", "numbs": 353},
              {"name": "ShapeRenderer", "numbs": 2247}
             ]
            },
            {"name": "ScaleBinding", "numbs": 11275},
            {"name": "Tree", "numbs": 7147},
            {"name": "TreeBuilder", "numbs": 9930}
           ]
          },
          {
           "name": "events",
           "children": [
            {"name": "DataEvent", "numbs": 2313},
            {"name": "SelectionEvent", "numbs": 1880},
            {"name": "TooltipEvent", "numbs": 1701},
            {"name": "VisualizationEvent", "numbs": 1117}
           ]
          },
          {
           "name": "legend",
           "children": [
            {"name": "Legend", "numbs": 20859},
            {"name": "LegendItem", "numbs": 4614},
            {"name": "LegendRange", "numbs": 10530}
           ]
          },
          {
           "name": "operator",
           "children": [
            {
             "name": "distortion",
             "children": [
              {"name": "BifocalDistortion", "numbs": 4461},
              {"name": "Distortion", "numbs": 6314},
              {"name": "FisheyeDistortion", "numbs": 3444}
             ]
            },
            {
             "name": "encoder",
             "children": [
              {"name": "ColorEncoder", "numbs": 3179},
              {"name": "Encoder", "numbs": 4060},
              {"name": "PropertyEncoder", "numbs": 4138},
              {"name": "ShapeEncoder", "numbs": 1690},
              {"name": "numbsEncoder", "numbs": 1830}
             ]
            },
            {
             "name": "filter",
             "children": [
              {"name": "FisheyeTreeFilter", "numbs": 5219},
              {"name": "GraphDistanceFilter", "numbs": 3165},
              {"name": "VisibilityFilter", "numbs": 3509}
             ]
            },
            {"name": "IOperator", "numbs": 1286},
            {
             "name": "label",
             "children": [
              {"name": "Labeler", "numbs": 9956},
              {"name": "RadialLabeler", "numbs": 3899},
              {"name": "StackedAreaLabeler", "numbs": 3202}
             ]
            },
            {
             "name": "layout",
             "children": [
              {"name": "AxisLayout", "numbs": 6725},
              {"name": "BundledEdgeRouter", "numbs": 3727},
              {"name": "CircleLayout", "numbs": 9317},
              {"name": "CirclePackingLayout", "numbs": 12003},
              {"name": "DendrogramLayout", "numbs": 4853},
              {"name": "ForceDirectedLayout", "numbs": 8411},
              {"name": "IcicleTreeLayout", "numbs": 4864},
              {"name": "IndentedTreeLayout", "numbs": 3174},
              {"name": "Layout", "numbs": 7881},
              {"name": "NodeLinkTreeLayout", "numbs": 12870},
              {"name": "PieLayout", "numbs": 2728},
              {"name": "RadialTreeLayout", "numbs": 12348},
              {"name": "RandomLayout", "numbs": 870},
              {"name": "StackedAreaLayout", "numbs": 9121},
              {"name": "TreeMapLayout", "numbs": 9191}
             ]
            },
            {"name": "Operator", "numbs": 2490},
            {"name": "OperatorList", "numbs": 5248},
            {"name": "OperatorSequence", "numbs": 4190},
            {"name": "OperatorSwitch", "numbs": 2581},
            {"name": "SortOperator", "numbs": 2023}
           ]
          },
          {"name": "Visualization", "numbs": 16540}
         ]
        }
       ]
     };

    // var canvas = d3.select("body").append("svg")
    //   .attr("width", 1500)
    //   .attr("height", 1500);

      var margin = {top: 20, right: 90, bottom: 30, left: 90},
          width = 2048,
          height = 1024;

      // append the svg object to the body of the page
      // appends a 'group' element to 'svg'
      // moves the 'group' element to the top left margin
      var svg = d3.select("body").append("svg")
          .attr("width", width + margin.right + margin.left)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate("
                + margin.left + "," + margin.top + ")");

                var g = svg.append('g')
                    .attr('transform',
                          'translate(' + margin.left + ',' + margin.top + ')');


var stratify = d3.stratify()
    .parentId(function(d) { return d.id.substring(0, d.id.lastIndexOf(".")); });

var tree = d3.tree()
    .size([2 * Math.PI, 500])
    .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

d3.json(data, function(error, data) {
  if (error) throw error;

  var root = tree(stratify(data));

  var link = g.selectAll(".link")
    .data(root.links())
    .enter().append("path")
      .attr("class", "link")
      .attr("d", d3.linkRadial()
          .angle(function(d) { return d.x; })
          .radius(function(d) { return d.y; }));

  var node = g.selectAll(".node")
    .data(root.descendants())
    .enter().append("g")
      .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
      .attr("transform", function(d) { return "translate(" + radialPoint(d.x, d.y) + ")"; });

  node.append("circle")
      .attr("r", 2.5);

  node.append("text")
      .attr("dy", "0.31em")
      .attr("x", function(d) { return d.x < Math.PI === !d.children ? 6 : -6; })
      .attr("text-anchor", function(d) { return d.x < Math.PI === !d.children ? "start" : "end"; })
      .attr("transform", function(d) { return "rotate(" + (d.x < Math.PI ? d.x - Math.PI / 2 : d.x + Math.PI / 2) * 180 / Math.PI + ")"; })
      .text(function(d) { return d.id.substring(d.id.lastIndexOf(".") + 1); });
});

function radialPoint(x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
}

  }

  componentWillUnmount(){
    d3.select("svg").remove();
  }

  render() {
    return(
      <div id="chordDiagram" />
    );
  }

}
