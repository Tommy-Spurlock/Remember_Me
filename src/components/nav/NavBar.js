import React, { Component } from "react"
import { Redirect, Link, Route } from "react-router-dom"






export default class NavBar extends Component {




    render() {
        return(
            <nav>
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo center">Remember Me?</Link>

              <ul id="nav-mobile" className="left hide-on-med-and-down">

                {/* Routes go here */}
                <li><Link to="/components">Components</Link></li>
                <li className="searchBar"><input id="search" type="search" placeholder="Search" /></li>
              </ul>
              <a className="valign-wrapper right btn-floating btn-large waves-effect waves-light black"><i className="material-icons">cancel</i></a>
            </div>

          </nav>

        )
    }
}