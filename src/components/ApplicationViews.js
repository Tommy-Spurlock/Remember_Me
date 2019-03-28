import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import ReminderList from "./reminder/ReminderList"



export default class ApplicationViews extends Component {






    render() {
        return(
            <Route path="/" render={props => {
                return <ReminderList />
            }} />
        )
    }
}