import React, { Component } from 'react';
import { Background } from './App.style';
import './App.css';
import HomeBoard from "./containers/HomeBoard";
//import Nav from './components/Nav/Nav';
import AppName from "./components/AppName/AppName";

class App extends Component {

  render(){
    return (
      <div>
        <Background/>
        <AppName/>
        {/*<Nav/>*/}
        <HomeBoard/>
      </div>
    );
  }
}

export default App;
