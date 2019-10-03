import React, { Component } from 'react';
import moment from "moment"

import PortfolioContainer from "./portfolio-container"
import NavigationContainer from "./navigation-container.js"
import Counter from "./counter"
import Toggle from "./toggle"
import Resize from "./resize"
import Clock from "./clock"
import Show from "./show"
import Align from './align'
import Color from './color'
import "../../static/styles.scss"

export default class App extends Component {
  render() {
    return (
      
      <body className='app' >
       <Counter />
        <Toggle />
        <Resize />
        <Clock />
        <Show />
        <Align />
        <Color />
      </body>

      
    );
  }
}
