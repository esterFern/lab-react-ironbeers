import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Beer extends Component {
  render() {
    return (
      <Link to={`/beers/${this.props.id}`} className="list-beer">
        <div className="image-container">
          <img src={this.props.img} alt={this.props.name} height="150px" />
        </div>

        <div className="list-text">
          <h2>{this.props.name}</h2>
          <h3>{this.props.tagline}</h3>
        </div>
      </Link>
    )
  }
}
