import React, {Component} from "react"

export default class Align extends Component{
    constructor(){
        super()
        this.state = {
            align: 'left'
        }
    }

    handleAlign = alignment =>{
        this.setState({
            align: alignment
        })
    }

    render(){
        return(
            <div  className='align'>
            <div>
                <h1 style={{textAlign: `${this.state.align}`}}>Align Me</h1>
                <button onClick={() => this.handleAlign('left')}>Left</button>
                <button onClick={() => this.handleAlign('center')}>Center</button>
                <button onClick={() => this.handleAlign('right')}>Right</button>


            </div>
            </div>
        )
    }
}