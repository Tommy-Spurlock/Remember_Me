import React, { Component } from "react"
import { Redirect, Link, Route } from "react-router-dom"






export default class NavBar extends Component {




    render() {
        return(
            <nav>
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo center">Logo</Link>

              <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li className="searchBar"><input id="search" type="search" placeholder="Search" /></li>
                {/* Routes go here */}
                <li><Link to="/sass">Sass</Link></li>
                <li><Link to="/components">Components</Link></li>
                <li><Link to="/javascript">JavaScript</Link></li>
              </ul>
              <a className="valign-wrapper right btn-floating btn-large waves-effect waves-light black"><i class="material-icons">cancel</i></a>
            </div>

          </nav>

        )
    }
}