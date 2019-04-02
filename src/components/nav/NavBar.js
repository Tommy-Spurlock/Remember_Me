import React, { Component } from "react";
import { Redirect, Link, Route } from "react-router-dom";
import auth0Client from "../authentication/Auth";

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


