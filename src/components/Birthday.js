import React, { Component } from "react";
import ApplicationViews from "./ApplicationViews";
// import NavBar from "./nav/NavBar";
import "./Birthday.css"
import "../../node_modules/materialize-css/dist/css/materialize.min.css"
import NavBar from "./nav/NavBar";
import SideNav from "./nav/SideNav";
import {withRouter} from 'react-router-dom';
import auth0Client from "./authentication/Auth";



class Birthday extends Component {

    async componentDidMount() {
        if (this.props.location.pathname === '/callback') return;
        try {
          await auth0Client.silentAuth();
          this.forceUpdate();
        } catch (err) {
          if (err.error !== 'login_required') console.log(err.error);
        }
      }


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

    export default withRouter(Birthday);
