import React, { Component } from 'react';
import ReactLoading from 'react-loading';

export default class LoadingAnimation extends Component{
  componentDidMount() {

  }

  componentWillUnmount(){

  }

  render() {
    return(
      <ReactLoading type="bars" color="#444" />
    );
  }
}
