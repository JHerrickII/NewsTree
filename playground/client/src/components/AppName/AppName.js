import React, { Component } from 'react';
import { AppNameContainer, Logo } from './AppName.style.js';
var source = require('../../assets/logo.png')

class AppName extends Component {
  render() {
    return (
      <AppNameContainer>
        {/*<Title id="home"><a href="http://nlurelationsviz.mybluemix.net/">News Tree</a></Title>*/}
        <Logo><a href="http://nlurelationsviz.mybluemix.net/"><img src={source} alt="News Tree" width="60%" height="60%"/></a></Logo>
      </AppNameContainer>
    );
  }
}

export default AppName;
