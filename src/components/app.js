import React, { Component } from 'react';
import moment from "moment"
import axios from 'axios'
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"

import PortfolioContainer from "./portfolio-container"

import NavigationContainer from "./navigation-container.js"
import Counter from "./counter"
import Toggle from "./toggle"
import Resize from "./resize"
import Clock from "./clock"
import Show from "./show"
import Align from './align'
import Color from './color'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Blog from './pages/blog'
import NoMatch from './pages/nomatch'

export default class App extends Component {
  constructor(){
    super()

  }


  render() {
    
    return (
      
      <BrowserRouter>
      <div>
        <NavigationContainer />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/about' component={About} />
          <Route path="/contact" component={Contact}/>
          <Route path='/blog' component={Blog}/>
          
          <Route component={NoMatch}/>

        </Switch>
        
      </div>
      </BrowserRouter>

      
      
    );
  }
}
