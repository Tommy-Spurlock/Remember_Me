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
            {this.state.celebs.slice(0,3).map(celeb =>
                <div class="col s12 m7">
        <h2 class="header">Horizontal Card</h2>
        <div class="card horizontal">
          <div class="card-image">
            <img src="https://lorempixel.com/100/190/nature/6" />
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p>{celeb.name}</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
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