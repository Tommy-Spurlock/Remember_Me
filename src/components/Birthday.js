import React, { Component } from "react";
import ApplicationViews from "./ApplicationViews";
// import NavBar from "./nav/NavBar";
import "./Birthday.css"
import "../../node_modules/materialize-css/dist/css/materialize.min.css"
import NavBar from "./nav/NavBar";
import SideNav from "./nav/SideNav";

export default class Birthday extends Component {


    render() {
        //this page will currently not render anything

        return(
            <React.Fragment>
            <NavBar />
            <SideNav />
            <ApplicationViews />
            </React.Fragment>
            )
    }
    }
