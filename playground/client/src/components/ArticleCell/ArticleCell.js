import React, {Component} from 'react';
import {Panel} from 'pui-react-panels';
//var Panel = require('pui-react-panels').Panel;

class ArticleCell extends Component{
  constructor(props) {
    super(props);

    this.state = {
      stylePath: "https://www.w3schools.com/w3css/4/w3.css",
    };
  }

  onButtonClick = (e) => {
    //console.log(this.props.article.title)
    var theLink = this.props.article.url;
    this.props.onSelectLink(theLink);
  }


  render(){
    var myDate = new Date( this.props.article.blekko.chrondate *1000).toLocaleString();
    var finalDate = myDate.substr(0, myDate.indexOf(','));
    var hostSite = "http://"+this.props.article.host;
    //console.log(myDate);
    return(
      <div>
        <br/>
        <div><Panel className="bg-neutral-11 box-shadow-1" header={<p className="artTitle"><a href={this.props.article.url} target="_blank" rel="noopener noreferrer"><strong className="articleName">{this.props.article.title}</strong></a></p>} actions={<div><button className="btn btn-default mrl tester" onClick={this.onButtonClick}>Expand</button><div><p>{finalDate}</p></div></div>}>
          <div>{this.props.article.author} | <a href={hostSite} target="_blank" rel="noopener noreferrer">{this.props.article.host}</a></div>
        </Panel></div>
          <link rel="stylesheet" type="text/css" href={this.state.stylePath}/>
      </div>
    );
  }
}

export default ArticleCell;

//<div><strong><a href={this.props.articles.data.url}>{this.props.articles.data.title}</a></strong></div>
//<div>{this.props.articles.data.author}</div>

//add a button to auto search later
//<button className="btn btn-default mrl">Go</button>
