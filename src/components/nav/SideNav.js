import React, { Component } from "react"
import { Redirect, Link, Route } from "react-router-dom"
import M from "materialize-css/dist/js/materialize.min.js";
import UserManager from "../../modules/UserManager"






export default class SideNav extends Component {
  state = {
    users: [],
    activeUser: sessionStorage.getItem("credentials")
  }

  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
        edge: "left",
        inDuration: 250

    });

  }




    render() {
      console.log("it rendered")
        return(
            <React.Fragment>
  <ul id="slide-out" className="sidenav">
  <li><Link to="/reminders">Reminders</Link></li>
  <li><Link to="/">Calender</Link></li>
  <li><Link to="/" className="waves-effect" >Settings</Link></li>
</ul>
<a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
</React.Fragment>
        )
    }
}