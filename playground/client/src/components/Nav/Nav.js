import React, { Component } from 'react';
import { NavigationContainer, NavItem } from './Nav.style.js';

class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavItem id="home">Home</NavItem>
        <NavItem id="about">About</NavItem>
      </NavigationContainer>
    );
  }
}

export default NavigationBar;
