import React, { Component } from "react";
import ModalForm from './ModalForm'
import ModalEditForm from './ModalEditForm'

export default class ReminderList extends Component {
  state = {
  id: "",
  name: "",
  birthdate: "",
  email: "",
  phoneNumber: "",
  notes: "",
  imageURL: "",
  userId: parseInt(sessionStorage.getItem("credentials"))
}




  render() {
    return (
      <React.Fragment>
          <button data-target="modal1" className="btn modal-trigger">Add Reminder</button>

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
              <div className="row">
              <div className="card-action col s6">
                <button className="btn" onClick={() => this.props.deleteReminder(reminder.id)}>Delete Reminder</button>
              </div>
              <div className="card-action col s6">
                <button id={reminder.id} data-target="modal2" className="btn modal-trigger" onClick={() => {
                      const newstate = {
                          id: reminder.id,
                          name: reminder.name,
                          birthdate: reminder.birthdate,
                          email: reminder.email,
                          phoneNumber: reminder.phoneNumber,
                          notes: reminder.notes,
                          imageURL: reminder.imageURL,
                          userId: parseInt(sessionStorage.getItem("credentials"))}
                      this.setState(newstate)}
                }
                      >Edit Reminder</button>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        )}
        <div>
          <ModalForm  addreminder={this.props.addReminder}/>
        </div>
        <div>
          <ModalEditForm
          name={this.state.name}
          updateReminder={this.props.updateReminder}/>
        </div>
      </React.Fragment>
    );
  }
}
