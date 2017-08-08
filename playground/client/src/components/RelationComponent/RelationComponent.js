import React, {Component} from 'react';

class RelationComponent extends Component{
  // constructor(props){
  //   super(props);
  //   // this.state = {
  //   //   relation: '',
  //   // };
  // }

  //different Relation Layout for display
  // const RelationComponent = ({ relation }) => {
  //   //console.log(relation)
  //   return (<div className="relation">
  //     <div className="sentence">{relation.sentence}</div>
  //     <div className="breakdown">
  //       <div className="first">{relation.arguments[0].text}</div>
  //       <div className="type">{relation.type}</div>
  //       <div className="second">{relation.arguments[1].text}</div>
  //       <br/>
  //       <br/>
  //       <br/>
  //     </div>
  //   </div>)
  // }
  //

  render(){
    return(
      <div>
        <div>{this.props.relation.sentence}</div>
        <strong><em><div className="relationSummary">{this.props.relation.arguments[0].text} {this.props.relation.type} {this.props.relation.arguments[1].text}</div></em></strong>
        <em><div>&#8594;</div></em>
        <br/>
        <br/>
      </div>
    );
  }
}

export default RelationComponent;
