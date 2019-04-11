import React, { Component } from "react";
import M from "materialize-css";
import CelebManager from '../../modules/CelebManager'
import "materialize-css/dist/css/materialize.min.css";
import Moment from 'react-moment';
import moment from 'moment'





export default class CelebList extends Component {
    state = {
        celebs: []
    }

    componentDidMount() {
        const newState = {}

        CelebManager.getAll()
        .then(celebs => newState.celebs = celebs.Birthdays)
        .then(() => this.setState(newState))
    }
    render() {
        console.log(this.state.celebs)
        return(
            <>

                    <h2 className="header"><Moment format="LLLL"></Moment></h2>

            {this.state.celebs.slice(0,3).map(celeb =>
              <div className="container" key="celeb.celebId">
                <div className="col s12 m7">
        <div className="card horizontal">
          <div className="card-image">
            <img src={`https://celebritybucks.com/images/celebs/full/${celeb.celebId}.jpg`} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <h3>{celeb.name}</h3>
            </div>
            <div className="card-content">
              <p>Age: {celeb.age}</p>
            </div>
            <div className="card-content">
              <p>Date of Birth: {celeb.dob}</p>
            </div>
            <div className="card-content">
              <p>Twitter: {celeb.twitter}</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
      </div>

            )
        }


        </>

        )
    }
}