import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import WelcomePage from "./nav/WelcomePage"
import ReminderList from "./reminder/ReminderList"
import ReminderManager from "../modules/ReminderManager"
import UserAPIManager from "../modules/UserManager"
import Auth0Client from "./authentication/Auth";
import Callback from "./authentication/Callback"



export default class ApplicationViews extends Component {

    state = {
        users: [],
        reminders: [],
        colorSchemes: [],
        activeUser: sessionStorage.getItem("credentials"),
        // currentUsername: ""
      }

    addReminder = reminder =>
       ReminderManager.post(reminder)
        .then(() => ReminderManager.getAll(sessionStorage.getItem("credentials")))
        .then(reminders =>
          this.setState({
           reminders: reminders
        })
        );

        deleteReminder = id =>
          ReminderManager.delete(id)
          .then(() => ReminderManager.getAll(sessionStorage.getItem("credentials")))
          .then(reminders => this.setState({
              reminders: reminders
          })
        )
        updateReminder = (editedreminderObject) => {
          return ReminderManager.edit(editedreminderObject)
          .then(() => ReminderManager.getAll(sessionStorage.getItem("credentials")))
          .then(reminders => {
            this.setState({
              reminders: reminders
            })
          });
        };


      runOnLogin = () => {
        const activeUser = sessionStorage.getItem("credentials")
        this.setState({ activeUser: activeUser })
        const newState = {}


        ReminderManager.getAll(this.state.activeUser)
          .then(reminders => newState.reminders = reminders)
          .then(() => this.setState(newState))
      }

      componentDidMount() {
        this.runOnLogin()
      }



    render() {
        return(
            <React.Fragment>

            <Route exact path="/callback" render={props => {
                return <Callback runOnLogin={this.runOnLogin} />
            }}/>


            <Route exact path="/" render={props => {
                return <WelcomePage {...props} />
            }} />
            <Route path="/reminders" render={props => {
               if (Auth0Client.isAuthenticated()) {
                return <ReminderList {...props} reminders={this.state.reminders}
                addReminder={this.addReminder}
                deleteReminder={this.deleteReminder}
                updateReminder={this.updateReminder}
                />;
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