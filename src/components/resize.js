import React, { Component } from 'react';



export default class Resize extends Component {
  constructor(){
      super()
      this.state = {
          size: 20
      }
  }
  handleSize = amt =>{
    this.setState({
        size: this.state.size + amt
    })
  }
  render() {
    return (
      <div className = 'resize'>

          <h1 style={{fontSize: `${this.state.size}px`}}>{`${this.state.size}px`}</h1>
          <button onClick={() => this.handleSize(-5)}>Smaller</button>
          <button onClick={() => this.handleSize(5)}>Larger</button>
      </div>
    )
}
}
