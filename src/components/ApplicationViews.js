import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import WelcomePage from "./nav/WelcomePage"
import ReminderList from "./reminder/ReminderList"
import ReminderAPIManager from "../modules/ReminderManager"
import UserAPIManager from "../modules/UserManager"
import Auth0Client from "./authentication/Auth";
import Callback from "./authentication/Callback"



export default class ApplicationViews extends Component {

    state = {
        users: [],
        reminders: [],
        colorSchemes: [],
        // activeUser: sessionStorage.getItem("activeUser"),
        // currentUsername: ""
      }

      componentDidMount() {
        const newState = {}

          UserAPIManager.getAll()
          .then(users => newState.users = users)
          .then(ReminderAPIManager.getAll)
          .then(reminders => newState.reminders = reminders)
          .then(() => this.setState(newState))


      }



    render() {
        return(
            <React.Fragment>

            <Route exact path="/callback" component={Callback} />


            <Route exact path="/" render={props => {
                return <WelcomePage {...props} />
            }} />
            <Route path="/reminders" render={props => {
               if (Auth0Client.isAuthenticated()) {
                return <ReminderList {...props} reminders={this.state.reminders} />;
              } else {
                Auth0Client.signIn();
                return null;
              }
            }}
          />
            </React.Fragment>
        )
}
}