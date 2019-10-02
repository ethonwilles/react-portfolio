import React, {Component} from "react"

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component{
    constructor(){
        super()

    }

    render(){
        return (
            <div>

                <h2>Portfolio Items go Here...</h2>
                <PortfolioItem />
            </div>
        )
    }
}