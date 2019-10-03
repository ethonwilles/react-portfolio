import React, {Component} from "react"

export default class Color extends Component{
    constructor(){
        super()
        this.state = {
            color: "black"
        }
    }

    handleColor = event => {
        this.setState({
            color: event.target.value
        })
    }    

    render(){
        return(
            <div  className="color">
            <h1 style={{color: `${this.state.color}`}}>{this.state.color}</h1>
            <input type="text" placeholder="enter HTML color" onChange={this.handleColor}></input>
            
            </div>
        )
    }
}