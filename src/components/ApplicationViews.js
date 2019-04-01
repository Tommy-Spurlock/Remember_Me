import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import WelcomePage from "./nav/WelcomePage"
import ReminderList from "./reminder/ReminderList"



export default class ApplicationViews extends Component {






    render() {
        return(
            <React.Fragment>
            <Route exact path="/" render={props => {
                return <WelcomePage {...props} />
            }} />
            <Route path="/reminders" render={props => {
                return <ReminderList {...props} />
            }} />
            </React.Fragment>
        )
}
}