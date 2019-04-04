import React, { Component } from "react";
import { Redirect, Link, Route } from "react-router-dom"


export default class WelcomePage extends Component {
  render() {
    return (
        <div className="container">
        <div className="card  welcome  ">
        <div className="card-image waves-effect waves-block waves-light">
        <h1>Welcome to Remember Me:</h1>
        <h1>Birthday Reminders</h1>
        </div>

        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
      </div>



        )
}
}