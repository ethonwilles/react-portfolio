import React, { Component } from 'react';



export default class Counter extends Component {
  constructor(){
      super()
      this.state = {
          counter: 0
      }
  }
  counter = amt => {
      this.setState({
        counter: this.state.counter + amt
      });
  };
  
  
  
    render() {
    return (
      <div className='counter'>

          <h1>{this.state.counter}</h1>
          <button onClick={() => this.counter(1)}>Add</button>
          <button onClick={() => this.counter(-1)}>Sub</button>
      </div>
    )
}
}
