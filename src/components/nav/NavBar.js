import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            <button className="waves-effect waves-light btn right" onClick={auth0Client.signIn}>
              Sign In
            </button>
          ) : (
            <React.Fragment>

              <ul id="nav-mobile" className="right hide-on-med-and-down">
                {/* Routes go here */}
              <li> <button
                className="waves-effect waves-light btn right"
                onClick={() => {
                  this.signOut();
                }}
              >
                Sign Out
              </button></li>

              </ul>



            </React.Fragment>
          )}
        </div>
      </nav>
    );
  }
}


