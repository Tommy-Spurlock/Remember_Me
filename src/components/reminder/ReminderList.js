import React, { Component } from "react";

export default class ReminderList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.reminders.map(reminder =>
        <div key={reminder.id}className="container">
        <div className="col s12 m7">
          <h2 className="header">Birthday Alert: {reminder.birthdate}</h2>
          <div className="card horizontal">
            <div className="card-image">
              <img src={reminder.imageURL} />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>
                   {reminder.name}
                </p>
              </div>
              <div className="card-content">
                <p>
                   {reminder.phoneNumber}
                </p>
              </div>
              <div className="card-content">
                <p>
                   {reminder.email}
                </p>
              </div>
              <div className="notes card-content">
                <p>
                   {reminder.notes}
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
        </div>
        )}
      </React.Fragment>
    );
  }
}
