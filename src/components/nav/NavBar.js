import React, { Component } from "react"
import { Redirect, Link, Route } from "react-router-dom"





export default class NavBar extends Component {





    render() {
        return(
            <nav>
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">Logo</Link>

              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><input id="search" type="text" placeholder="Search" /></li>
                <li><Link to="/sass">Sass</Link></li>
                <li><Link to="/components">Components</Link></li>
                <li><Link to="/javascript">JavaScript</Link></li>
              </ul>
            </div>

          </nav>

        )
    }
}