import React, {Component} from 'react'
import {Link} from 'react-router-dom'
export default class NavigationComponent extends Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div>
            
            <Link to='/'><button>Home</button></Link>
            <Link to='/about'><button>About</button></Link>
            <Link to='/contact'><button>Contact</button></Link>

            <Link to='/blog'><button>Blog</button></Link>

            {false ? <button>Add Blog</button> : null}

            </div>
        )
    }
}