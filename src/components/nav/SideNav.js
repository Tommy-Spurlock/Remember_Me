import React, { Component } from "react"
import { Link } from "react-router-dom"
import M from "materialize-css/dist/js/materialize.min.js";






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
  <li><Link to="/calendar">Calender</Link></li>
  <li><Link to="/celebrities">Celebrities</Link></li>
  <li><Link to="/settings" className="waves-effect" >Settings</Link></li>
</ul>
<a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
</React.Fragment>
        )
    }
}