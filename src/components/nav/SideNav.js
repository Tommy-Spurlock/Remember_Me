import React, { Component } from "react"
import { Redirect, Link, Route } from "react-router-dom"
import M from "materialize-css/dist/js/materialize.min.js";







export default class SideNav extends Component {

  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
        edge: "left",
        inDuration: 250
    });
}



    render() {
        return(
            <React.Fragment>
  <ul id="slide-out" className="sidenav">
  <li><div className="user-view">
    <div className="background">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeovBY04RPP3pOhXsYWqwsbWIqBsiE99n7UtpObTmYmtOwOgjw" />
    </div>
    <a href="#user"><img className="circle" src="data:image/jpeg;base64,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" /></a>
    <a href="#name"><span className="white-text name">John Doe</span></a>
    <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
  </div></li>
  <li><Link><i className="material-icons">cloud</i>First Link With Icon</Link></li>
  <li><Link>Second Link</Link></li>
  <li><div className="divider"></div></li>
  <li><a className="subheader">Subheader</a></li>
  <li><Link className="waves-effect" >Third Link With Waves</Link></li>
</ul>
<a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
</React.Fragment>
        )
    }
}