import React, {Component} from "react"
import PortfolioContainer from "../portfolio-container"

export default class Home extends Component{
    render(){

        return(
            <div>
                <h3>Homepage</h3>
                <PortfolioContainer />
            </div>
        )
    }
}