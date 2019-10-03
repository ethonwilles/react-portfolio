import React, { Component } from 'react';



export default class Show extends Component {
  constructor(){
      super()
      this.state = {
          text: 'Hide',
          textActual: 'Hello',
          visible: 'visible'
      }
  }

  handleToggle = () =>{
      if(this.state.text === 'Hide'){
        this.setState({
            visible: 'hidden'
        })
          this.setState({
              text : 'Show'
          })
        
      }else{
        this.setState({
            visible: 'visible'
        })
          this.setState({
              text: 'Hide'
          })
      }
  }
 
  render() {
    return (
      <div className = 'show'>

          <h1 style={{visibility: `${this.state.visible}`}}>{this.state.textActual}</h1>
          <button onClick={this.handleToggle}>{this.state.text}</button>
      </div>
    )
}
}
