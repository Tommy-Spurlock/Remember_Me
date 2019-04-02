import React, { Component } from "react";
import { Redirect, Link, Route } from "react-router-dom"


export default class WelcomePage extends Component {
  render() {
    return (
        <div className="container">
        <div className="card  welcome  ">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src="https://i.imgur.com/KOXOBiN.gif" />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
          <p><Link to="/reminders">This is a link</Link></p>
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