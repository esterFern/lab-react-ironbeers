import React, { Component } from 'react'
import beersService from '../services/beersService';
import Navbar from '../components/Navbar';

export default class BeerDetails extends Component {

  state = {
    beer: {}
  }

  componentDidMount() {
    this.getBeer();
  }

  getBeer = () => {
    beersService.getBeer(this.props.match.params.id)
      .then(data => {
        this.setState({
          beer: data
        })
      })
      .catch(error => console.log(error));

  }

  render() {
    const { beer } = this.state;
    return (

      <div>
        <Navbar />
        <div className="details">

          <img src={beer.image_url} alt={beer.name} height="250px" />
          <div className="line">
            <h1>{beer.name}</h1>
            <h2>{beer.attenuation_level}</h2>
          </div>
          <div className="line">
            <h3>{beer.tagline}</h3>
            <p>{beer.first_brewed}</p>
          </div>
          <p>{beer.description}</p>
          <p className="beer-contribution">{beer.contributed_by}</p>
        </div>
      </div>

    )
  }
}
