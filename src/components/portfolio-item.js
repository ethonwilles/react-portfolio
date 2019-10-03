import React, {Component} from "react"

export default class PortfolioItem extends Component{

    
    render(){
        return(
        <div>

            <h3>{this.props.title}</h3>
            <h4>{this.props.url}</h4>
        </div>
        )
    }
}
