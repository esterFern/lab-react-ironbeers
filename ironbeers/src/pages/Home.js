import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import beersService from '../services/beersService';
import beersImg from '../images/list-beers.jpg';
import randomImg from '../images/random-beers.jpg';


export default class Home extends Component {

  state = {
    randomBeer: {}
  }

  componentDidMount() {
    this.getRandomBeer();
  }

  getRandomBeer = () => {
    beersService.getRandomBeer()
      .then(data => {
        this.setState({
          randomBeer: data[0]
        })
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="home">
        <h1>Ironbeers</h1>

        <Link to="/beers" className="section-container list-section">
          <p className="section-title">See all</p>
        </Link>

        <Link to={`/beers/${this.state.randomBeer._id}`} className="section-container random-section">
          <p className="section-title">Random beer</p>
        </Link>

      </div>
    )
  }
}
