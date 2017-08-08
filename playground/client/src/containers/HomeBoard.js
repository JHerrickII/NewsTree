import React, { Component } from 'react';
import axios from 'axios'
import RelationComponent from '../components/RelationComponent/RelationComponent';
import TreeRel from '../components/RelationChart2/TreeRel';
import '../components/RelationChart2/TreeRel.css';
import LoadingAnimation from '../components/loadingAnimation/LoadingAnimation.js';
import CircularFocus from '../components/UnworthyGraphs/CircularFocus/CircularFocus.js';
import Collapsible from 'react-collapsible';
import {Panel} from 'pui-react-panels';
import * as SummaryTool from '../Functions/summary.js'
import * as Scroll from 'react-scroll';
var scroll = Scroll.animateScroll;
//import { Header, Jumbotron, Footer } from 'watson-react-components';
//import GraphChart from '../graphChart/exampleLineGraph/GraphChart';
//import '../graphChart/exampleLineGraph/graph.css';
//import Chart from '../graphChart/scatterDemo/chart';
//import RelationChart from '../graphChart/RelationChart/RelationChart';
//import '../graphChart/RelationChart/RelationChartStyle.css';
//import Bars from '../components/UnworthyGraphs/Bars/Bars.js';
// import Circles from '../components/UnworthyGraphs/Circles/Circles.js';
// import MovingCircles from '../components/UnworthyGraphs/Circles/MovingCircles.js';
// import ExternalData from '../components/UnworthyGraphs/ExternalData/ExternalData.js';
// import Paths from '../components/UnworthyGraphs/Paths/Paths.js';
// import Arcs from '../components/UnworthyGraphs/Arcs/Arcs.js';
 //import PieLayout from '../components/UnworthyGraphs/PieLayout/PieLayout.js';
// import Trees from '../components/UnworthyGraphs/Trees/Trees.js';
// import ChordDiagram from '../components/UnworthyGraphs/ChordDiagram/ChordDiagram.js';
//import CircTrees from '../components/UnworthyGraphs/Trees/CircTrees.js';
//import TopDownCollapsibleTree from '../components/UnworthyGraphs/TopDownCollapsibleTree/TopDownCollapsibleTree.js';
//import BasicTree from '../components/UnworthyGraphs/BasicTree/BasicTree.js';
//import * as summary from 'node-tldr';

export default class HomeBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      relations: [],
      metadata: {},
      input:'',
      cachedInput:'',
      checked: true,
      viewChecked: false,
      stylePath: "https://www.w3schools.com/w3css/4/w3.css",
      convertedRel:[],
      selectedViz: 3,
      articleSummary: [],
      rawText: '',
      compRatio: 0,
    };
  }

  //User input handler
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  //URL or plaintext checkbox handler
  handleChecked= (e) => {
    this.setState({checked:!this.state.checked})

  }

  //Radial View or Standard View Handler
  handleViewChecked= (e) => {
    this.setState({viewChecked:!this.state.viewChecked})
    //console.log(this.state.viewChecked);
  }

  handleArticleSelected= (link) => {
    //console.log(link);
    document.getElementById("userInput").value = link;
    var clear = document.getElementById("checkboxInput")
    clear.checked = true;
    this.setState({input:link,
                  selectedViz:3,
                  checked:true}, function() {
                    var graphButton = document.getElementById("graphButton");
                    graphButton.click();
    });
  }

  //Relations button handler
  onButtonClickRelations = (e) => {
    if(!this.state.checked){
      this.setState({selectedViz:2});
      var target = this.state.input;
      var postReq = "relations";
      var userMetadata = {
                          "title": "USER INPUT",
                          "publication_date": "",
                          "image": "",
                          "feeds": [
                                    {
                                              "link": "http://nlurelationsviz.mybluemix.net/"
                                    }
                          ],
                          "authors": [
                                    {
                                              "name": "USER"
                                    }
                          ]
                }
      this.setState({metadata:userMetadata});
      axios.post("http://NLUBase.mybluemix.net/" + postReq, {
        text: target,
      }).then(response => {
        //console.log(JSON.stringify(response.data, undefined, 10));
        this.setState({
          relations: response.data.relations,
          selectedViz: 0});
        console.log("Switched to Relation View");
        scroll.scrollTo(450);
        }).catch(function(error){
          window.alert("No Relations Were Found");
          window.location.href = '/';
          //console.log(error);
          //window.alert("No Relations Found");
        })
    }

    else{
      if(this.state.input===''){
        this.setState({selectedViz:3})
      }
      else if(this.state.cachedInput===this.state.input){
        this.setState({selectedViz:0});
        scroll.scrollTo(450);
      }
      else{
        var targetSummary;
        this.setState({selectedViz:2});
        var target = this.state.input;
        var postReq = "relationsurl";
        axios.post("http://NLUBase.mybluemix.net/" + postReq, {
          text: target,
        }).then(response => {
            console.log(JSON.stringify(response.data, undefined, 10));
            //console.log(JSON.stringify(response.data, undefined, 10));
            SummaryTool.summarize(response.data.metadata.title, response.data.analyzed_text, function(err, summary) {
            	if(err) console.log("Something went wrong bro!");
            	 //console.log(summary);
              targetSummary=summary;
            	// console.log("Original Length " + (response.data.metadata.title.length + response.data.analyzed_text.length));
            	// console.log("Summary Length " + summary.length);
            	// console.log("Summary Ratio: " + (100 - (100 * (summary.length / (response.data.metadata.title.length + response.data.analyzed_text.length)))));
            });
            this.setState({
              metadata: response.data.metadata,
              articleSummary: targetSummary,
              relations: response.data.relations,
              rawText: response.data.analyzed_text,
              compRatio: Math.round((100 - (100 * (targetSummary.length / (response.data.metadata.title.length + response.data.analyzed_text.length))))*100)/100,
              cachedInput: this.state.input,
              selectedViz: 0,
            })
            //this.setNewTreeData();

            console.log("Switched to Relation View");
            //window.scrollTo(0,1500);
            scroll.scrollTo(450);
        }).catch(function(error){
          window.alert("No Relations Were Found");
          window.location.href = '/';
          //console.log(error);
          //window.alert("No Relations Found");
        })
      }
    }
  }

  //Graphing button handler
  onButtonClickGraph = (e) => {
    if(!this.state.checked){
      this.setState({selectedViz:2});
      var target = this.state.input;
      var postReq = "relations";
      axios.post("http://NLUBase.mybluemix.net/" + postReq, {
        text: target
      }).then(response => {
          //console.log(JSON.stringify(response.data, undefined, 10));
          this.setState({relations: response.data.relations},function() {
            this.setNewTreeData();
          });
          this.setState({
            selectedViz:1,
          })
          console.log("Switched to Graph View");
          //window.scrollTo(0,document.body.scrollHeight-30);
          scroll.scrollTo(500);
          }).catch(function(error){
            window.alert("No Relations Were Found");
            window.location.href = '/';
            //console.log(error);
            //window.alert("No Relations Found");
          })
    }

    else{
      //console.log("gothere")
      if(this.state.input===''){
        this.setState({selectedViz:3})
      }
      // if(this.state.selectedViz===1 && this.state.cachedInput===this.state.input){
      //   console.log("hiiiiii")
      // }
        else if(this.state.selectedViz!==1){
          //console.log("entered loop")
          //console.log("Got here");
          this.setState({selectedViz:2});
          var targetSummary;
          var target = this.state.input;
          var postReq = "relationsurl";
          axios.post("http://NLUBase.mybluemix.net/" + postReq, {
            text: target
          }).then(response => {
            //console.log(JSON.stringify(response.data, undefined, 10));
              SummaryTool.summarize(response.data.metadata.title, response.data.analyzed_text, function(err, summary) {
              	if(err) console.log("Something went wrong bro!");
              	 //console.log(summary);
                targetSummary=summary;
              	// console.log("Original Length " + (response.data.metadata.title.length + response.data.analyzed_text.length));
              	// console.log("Summary Length " + summary.length);
              	// console.log("Summary Ratio: " + (100 - (100 * (summary.length / (response.data.metadata.title.length + response.data.analyzed_text.length)))));
              });
              //console.log(JSON.stringify(response.data, undefined, 10));
              this.setState({
                relations: response.data.relations,
              })
              this.setNewTreeData();
              this.setState({
                selectedViz:1,
                cachedInput: this.state.input,
                metadata: response.data.metadata,
                articleSummary: targetSummary,
                rawText: response.data.analyzed_text,
                compRatio: Math.round((100 - (100 * (targetSummary.length / (response.data.metadata.title.length + response.data.analyzed_text.length))))*100)/100,
                });
              //console.log(JSON.stringify(this.state.convertedRel, undefined, 10));
              console.log("Switched to Graph View");
              //window.scrollTo(0,document.body.scrollHeight-30);
              scroll.scrollTo(500);
          }).catch(function(error){
            window.alert("No Relations Were Found");
            window.location.href = '/';
            //console.log(error);
            //window.alert("No Relations Found");
          })
       }
     }
  }

  //navigate home
  onButtonClickHome = (e) => {
    this.setState({selectedViz:3});
  }


  //Filters words by proper noun
  properNounFilter(word){
    var charCode;

    if(word.charCodeAt(0) > 90){
      return false;
    }

    if(word.indexOf(' ')>=0){
      return true;
    }

    for(var i = 1; i < word.length; i++){
      charCode = word.charCodeAt(i);
      if(charCode >= 65 && charCode < 90) return false;
    }
    return true;
  }

  pronounFilter(word){
    if(word==="He" || word==="She" || word==="It" ||
    word==="Them" ||word==="They" || word==="he" ||
    word==="she" || word==="it" || word==="them" || word==="they"){
      return false;
    }
    return true;
  }

  //Combine same Subjects together in JSON file
  sameTopicCombine(obj){
    var source = obj.children;
    for(var i = 0; i < source.length; i++){
      var item = source[i];
      var subject = item.name;
      for(var j = i+1; j< source.length; j++){
        var compareToItem = source[j];
        var compareToSubject = compareToItem.name;
        if(subject === compareToSubject){
          var newTarget = compareToItem.children[0];
          item.children.push(newTarget);
          var index = source.indexOf(compareToItem);
          if(index >= -1){
            source.splice(index, 1);
            j--;
          }
        }
      }
    }
    return source;
  }

  removeCamelCase(text){
    var result = text.replace( /([A-Z])/g, " $1" );
    var finalResult = result.charAt(0).toUpperCase() + result.slice(1); //capitalize the first letter
    return finalResult;
  }

  //Creates new JSON object by modifying the raw NLU data obtained.
  setNewTreeData = (e) => {
    var childrenBody=[];
    var mainTopics = this.state.relations;
    for (var i = 0; i < mainTopics.length; i++) {
      var obj = mainTopics[i];
      var subject = obj.arguments[0].text;
      var target = obj.arguments[1].text;
      //var action = obj.type;
      var action = this.removeCamelCase(obj.type);
        if(this.properNounFilter(subject) && this.pronounFilter(subject) && this.pronounFilter(target) && action !== "Agent Of"){
          var combo = {"name":subject, "children":[{"name": target, "children":[], "action":action}], "action":" ", init : function() {
              this.children.parent = this;
              delete this.init;
              return this;
          }}.init();
          childrenBody.push(combo);
        }
    }
    //console.log(childrenBody.length);
    //this.setState({convertedRel: {"name":"Article Topics", "children":childrenBody}});
    var collapsedRelations = {"name":"Major Topics", "children":childrenBody}
    var finalChildren = this.sameTopicCombine(collapsedRelations);
    this.setState({convertedRel: {"name":"Major Topics", "children":finalChildren, "action":" "}});
    //console.log(JSON.stringify(this.state.convertedRel, undefined, 10));
  }

  //Mapping helper. Gives each relation an ID and prop detail
  eachRelation(rel, i){
    //console.log("hi")
    //console.log(i);
    return(
      <RelationComponent key={i} index={i} relation={rel}/>
      )
  }

  // mapRelations(){
  //   this.state.relations.map(this.eachRelation)
  // }

  authorList() {
    return this.state.metadata.authors.map(function(data,i){
      return (
        <div key={i}>{data.name}</div>
      )
    })
  }


  render() {
    var CheckedMsg;
    var placeholderText;
    var viz;
    if(this.state.checked){
      CheckedMsg="Searching Relations via URL";
      placeholderText="Paste URL Here..."
    }
    else{
      CheckedMsg="Searching Relations via Plain Text"
      placeholderText="Type Text To Be Analyzed Here..."
    }

    if(this.state.selectedViz===0){
        viz = (
          <div>
            <div className="articleMetadata"><Panel className="bg-neutral-11 box-shadow-1">
            <div className="metatitle">Title: <strong>{this.state.metadata.title}</strong></div>
            <div className="metaauthor">Author(s): <strong>{this.authorList()}</strong></div>
            <div className="metadatepublished">Date Published: <strong>{this.state.metadata.publication_date.substr(0, this.state.metadata.publication_date.indexOf('T'))}</strong></div>
            </Panel></div>
            <br/>
            <div className="finalSummary"><Panel className="bg-neutral-11 box-shadow-1"><strong><h2>Article Summary:</h2></strong><div className="summaryAndRelations"><em>{this.state.articleSummary}</em></div></Panel></div>
            <br/>
            <br/>
            <div className="compressionStats"><Panel className="bg-neutral-11 box-shadow-1">
            <div>Original Length: <strong>{this.state.metadata.title.length + this.state.rawText.length}</strong> Characters</div>
            <div>Summary Length: <strong>{this.state.articleSummary.length}</strong> Characters</div>
            <div>Compression Ratio: <strong>{this.state.compRatio}</strong></div>
            </Panel>
            </div>
            <br/>
            <br/>
            <div className="relations"><Panel className="bg-neutral-11 box-shadow-1"><h2>Complete Relations Outline:</h2>{this.state.relations.map(this.eachRelation)}</Panel></div>
          </div>
        )
    }
    else if(this.state.selectedViz===1){
      var graphViz;
      if(this.state.viewChecked){
        graphViz =
          <div className="radialTree">
            <CircularFocus treeData={this.state.convertedRel} ref="targetGraph"/>
          </div>

      }
      else{
        graphViz = <div id="svgTree"><TreeRel className="tree" treeData={this.state.convertedRel} screenWidth={window.innerWidth} ref="targetGraph" obtainLink={this.handleArticleSelected}/></div>

      }
        viz = (
          <div>
            <br/>
            <label><input className="w3-checkbox w3-checkmark" id="checkboxInput" type="checkbox" onChange={this.handleViewChecked} defaultChecked={this.state.viewChecked}/> Radial View </label>
            <br/>
            <div id="visualization">
              {graphViz}
            </div>
            {/*<TopDownCollapsibleTree treeData={this.state.convertedRel}/>*/}
            {/*<CircTrees treeData={this.state.convertedRel}/>*/}
          </div>
        )

    }

    else if(this.state.selectedViz===3){
      viz = (
        <div className="outerColl">
          <Collapsible trigger="Details">
            <div className="innerColl">
              <h3>About</h3>
              <Collapsible trigger="View">
                <p>Data is everywhere.</p>
                <p> With massive amounts of data coming from several outlets and buisnesses striving hard to pick
                  out the bits that matter, understanding big data has become an integral part of the success of industries worldwide.</p>
                <p>One of these industries is News. Thousands of news stories are published each day. And within these articles are millions of connected
                  concepts and relationships that are not as obvious. There is value in being able to organize and structure the news. And
                  the "NewsTree" project exists to serve that purpose: a visual supplement to the understanding of news articles. Using IBM Watson
                  Natural Language Understanding services, you are able to generate intuitive and responsive knowledge trees that depict the relationship
                  between each major concept in your article.</p>
                <p>Using summary algorithms, users may view a complete summarization of news articles.</p>
                <p>As well, you have the option to delve deeper in your exporation of the news by viewing the most recent and relavent news stories through
                  Watson Discovery services.</p>
                <p>See "How To Use" below.</p>
              </Collapsible>
              <h3>How to Use</h3>
              <Collapsible trigger="View">
              <p>Paste a link to any news article URL into the text box. Alternately, you may uncheck the "Search URL" checkbox to analyze plaintext directly.</p>
              <p>Then, click on the "Summary and Relations Outline" button for a compehensive summary of the article and a listing of every relationship
                contained in the article story.</p>
              <p>You may also click the "Knowledge Graph Representation" button to view a knowledge tree of all of the listed relationships. Graph nodes
                are responsive to user clicks to expand showing the type of relationship. Click on a terminal node to do a Discovery search for more
                related articles.</p>
              </Collapsible>
              <h3>Credits</h3>
              <Collapsible trigger="View">
                <p>This project was created by <a href="https://www.linkedin.com/in/herrickjohn1" target="_blank" rel="noopener noreferrer">John Albert Herrick II</a>.</p>
                <p>Developed using React and D3.</p>
                <p>All credit to <a href="https://www.ibm.com/us-en/" target="_blank" rel="noopener noreferrer">IBM</a> Watson Services: <a href="https://www.ibm.com/watson/services/discovery/" target="_blank" rel="noopener noreferrer">Discovery</a> and <a href="https://www.ibm.com/watson/services/natural-language-understanding/" target="_blank" rel="noopener noreferrer">Natural Language Understanding.</a> {/*And all credit to
                   the creators of react-loading, react-scroll, node-summary, and react-collapsible.*/}</p>
              </Collapsible>
           </div>
          </Collapsible>
        </div>

      )
    }

    else{
      //console.log("got here")
      viz = (
        <div className="LoadingAnimation">
          <br/>
          <br/>
          <br/>
          <br/>
          <center><LoadingAnimation/></center>
        </div>
      )
    }

    return (
      <div className="App">
        <div id="d3-container"/>
        <link rel="stylesheet" type="text/css" href={this.state.stylePath}/>
        <p className="credits">Developed By <a href="https://www.linkedin.com/in/herrickjohn1" target="_blank" rel="noopener noreferrer">John Herrick</a>. Powered By <a href="https://www.ibm.com/watson/" target="_blank" rel="noopener noreferrer">Watson.</a></p>
        <h1 className="mainHeading" onClick={this.onButtonClickHome}>NewsTree</h1>
        <p>Natural Language Processing: Relation Analysis and Visualization</p>
        <div className="heading">
          <center><input className="w3-white w3-border w3-border-blue" id="userInput" placeholder={placeholderText} type="text" onChange={ this.handleChange }/></center>
          <label><input className="w3-checkbox w3-checkmark" id="checkboxInput" type="checkbox" onChange={this.handleChecked} defaultChecked={this.state.checked}/>   Search URL</label>
        </div>
          <h2>{CheckedMsg}</h2>
        <div className="buttons"><center><div className="button w3-button w3-white w3-border w3-border-blue w3-round-large" onClick={this.onButtonClickRelations}>Summary and Relations Outline</div><div className="button w3-button w3-white w3-border w3-border-blue w3-round-large" id="graphButton" onClick={this.onButtonClickGraph}>Knowledge Graph Representation</div></center></div>
        <div className="">
        <br/>
          {viz}
          {/*<BasicTree/>*/}
          {/*<Bars/>*/}
          {/*<Circles/>*/}
          {/*<MovingCircles/>*/}
          {/*<ExternalData/>*/}
          {/*}<Paths/>*/}
          {/*}<Arcs/>*/}
          {/*<PieLayout/>*/}
          {/*<Trees/>*/}
          {/*<ChordDiagram/>*/}
          {/*clusters, bubbles, pack, histogram, treemap, maps */}
          {/*this.state.selectedViz === 0 ? <div className="relations">{this.state.relations.map(this.eachRelation)}</div> : <TreeRel treeData={this.state.convertedRel} />*/}
        </div>

        {/*<div id="footer">
          <p>Created By: John Albert Herrick II</p>
          <p>Powered by IBM Watson Services: Natrual Language Understanding</p>
          <p>React and D3</p>
        </div>*/}
      </div>
    );
  }
}
