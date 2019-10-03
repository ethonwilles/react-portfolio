import React, {Component} from "react"

import PortfolioItem from "./portfolio-item"


export default class PortfolioContainer extends Component{
    constructor(){
        super()
        this.state = {
            pageTitle: 'Welcome to my portfolio',
            isLoading: false,
            data: [
                {title: 'Quip', category: "eCommerce"},
                {title: 'Eventbrite', category: "scheduling"},
                {title: 'Ministry Safe', category: "Enterprise"},
                {title: "Swingway", category: "eCommerce"}
            ],

        }
        

    }

    portfolioItems(){

         return this.state.data.map(item =>{
            return <PortfolioItem title={item.title}  url={'google.com'} />
        })
    }
    handleFilter = filter => {
        this.setState({
            data : this.state.data.filter(el =>{
                return el.category === filter
            })
        })
    }

    render(){
        if(this.state.isLoading){
            return <div>Loading...</div>
        }
        return (
            <div>

                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
                <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>

                {this.portfolioItems()}
            </div>
        )
    }
}