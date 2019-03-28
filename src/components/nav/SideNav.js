import React, { Component } from "react"
import { Redirect, Link, Route } from "react-router-dom"






export default class SideNav extends Component {





    render() {
        return(
            <React.Fragment>
  <ul id="slide-out" className="sidenav">
  <li><div className="user-view">
    <div className="background">
      <img src="images/office.jpg" />
    </div>
    <a href="#user"><img className="circle" src="images/yuna.jpg" /></a>
    <a href="#name"><span className="white-text name">John Doe</span></a>
    <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
  </div></li>
  <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
  <li><a href="#!">Second Link</a></li>
  <li><div className="divider"></div></li>
  <li><a className="subheader">Subheader</a></li>
  <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
</ul>
<a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
</React.Fragment>
        )
    }
}