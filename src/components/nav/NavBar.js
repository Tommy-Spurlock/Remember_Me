import React, { Component } from "react";
import { Redirect, Link, Route } from "react-router-dom";
import auth0Client from "../authentication/Auth";
import { linkSync } from "fs";

export default class NavBar extends Component {
  signOut = () => {
    auth0Client.signOut();
    sessionStorage.clear();
    this.props.history.replace("/");
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/reminders" className="brand-logo">
            Remember Me?
          </Link>
          {!auth0Client.isAuthenticated() ? (
            <a className="waves-effect waves-light btn right" onClick={auth0Client.signIn}>
              Sign In
            </a>
          ) : (
            <React.Fragment>

              <ul id="nav-mobile" className="right hide-on-med-and-down">
                {/* Routes go here */}
                <li><input type="text" placeholder="Search" /></li>
              <li> <a
                className="waves-effect waves-light btn right"
                onClick={() => {
                  this.signOut();
                }}
              >
                Sign Out
              </a></li>

              </ul>



            </React.Fragment>
          )}
        </div>
      </nav>
    );
  }
}

{
  /* <nav>
             <div className="nav-wrapper">
               <Link to="/" className="brand-logo center">Remember Me?</Link>

               <ul id="nav-mobile" className="left hide-on-med-and-down">

                 {/* Routes go here */
}
{
  /* <li><Link to="/components">Components</Link></li>
                 <li className="searchBar"><input id="search" type="search" placeholder="Search" /></li>
               </ul>

               <a className="valign-wrapper right btn-floating btn-large waves-effect waves-light black"><i className="material-icons">cancel</i></a>
             </div>

           </nav>  */
}
