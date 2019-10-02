import React, { Component } from 'react';
import moment from "moment"

import PortfolioContainer from "./portfolio-container"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        
        <PortfolioContainer />
        <h2>{moment().format('ll')}</h2>
        
      </div>
    );
  }
}
