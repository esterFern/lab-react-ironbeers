import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import beersService from '../services/beersService';

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
      <div>
        Home
        <Link to="/beers">See all</Link>
        <Link to={`/beers/${this.state.randomBeer._id}`}>Random</Link>

      </div>
    )
  }
}
