import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Modal extends Component {

    state = {
        name: "",
        birthdate: "",
        email: "",
        phoneNumber: "",
        notes: "",
        imageURL: "",
        userId: parseInt(sessionStorage.getItem("credentials"))
      }



    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewReminder = evt => {
        evt.preventDefault();
        const newstate = {
        name: "",
        birthdate: "",
        email: "",
        phoneNumber: "",
        notes: "",
        imageURL: "",
        userId: parseInt(sessionStorage.getItem("credentials"))}

          const reminder = {
            name: this.state.name,
            birthdate: this.state.birthdate,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            notes: this.state.notes,
            imageURL: this.state.imageURL,
            // Make sure the userId is saved to the database as a number since it is a foreign key.
            userId: parseInt(sessionStorage.getItem("credentials"))

          };

          // Create the animal and redirect user to animal list
          this.props
            .addreminder(reminder)
             .then(() => this.setState(newstate));

      };
      clearState = () => {
        const newstate = {
            name: "",
            birthdate: "",
            email: "",
            phoneNumber: "",
            notes: "",
            imageURL: "",
            userId: parseInt(sessionStorage.getItem("credentials"))}

        this.setState(newstate)
      }


  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };  M.Modal.init(this.Modal, options);
    // If you want to work on instance of the Modal then you can use the below code snippet
    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  render() {
    return (
      <>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          {/* If you want Bottom Sheet Modal then add
        bottom-sheet className */}
          <div className="modal-content">

  <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input  id="name" type="text" className="validate" value={this.state.name} onChange={this.handleFieldChange}/>
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-field col s6">
          <input id="birthdate" type="date" className="validate" value={this.state.birthdate} onChange={this.handleFieldChange}/>
          <label htmlFor="Birthday">Birthday</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input  id="phoneNumber" type="text" className="validate" value={this.state.phoneNumber} onChange={this.handleFieldChange}/>
          <label htmlFor="phoneNumber">Phone Number</label>
        </div>
        <div className="input-field col s6">
          <input id="email" type="email" className="validate" value={this.state.email} onChange={this.handleFieldChange}/>
          <label htmlFor="password">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <textarea id="notes"  className="materialize-textarea" value={this.state.notes} onChange={this.handleFieldChange}/>
          <label htmlFor="notes">Notes</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="imageURL" type="text" className="validate"value={this.state.imageURL} onChange={this.handleFieldChange}/>
          <label htmlFor="imageUrl">Image URL</label>
        </div>
      </div>
    </form>
  </div>

          </div>
          <div className="modal-footer">
            <a href="#" className="modal-close waves-effect waves-red btn-flat" onClick={this.clearState}>
              Cancel
            </a>
            <a href="#" className="modal-close waves-effect waves-green btn-flat" onClick={this.constructNewReminder}>
              Save
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;