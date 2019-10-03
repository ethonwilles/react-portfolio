import React, {Component} from "react"






export default class Toggle extends Component {
  constructor(){
      super()
      this.state = {
          checker: true
          
      }
  }

  toggler = () =>{
      if (this.state.checker){
          this.setState({checker: false})
      }else{
        this.setState({checker: true})
      }
  }
  
    render() {
    return (
        
      <div className='toggle'>
          <hr/>
          {this.state.checker ? <h1>Hello</h1> : <h1>Goodbye</h1>}
        <button onClick={ this.toggler}>Toggle</button>
      </div>
    )
}
}
