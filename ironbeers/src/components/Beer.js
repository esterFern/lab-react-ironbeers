import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Beer extends Component {
  render() {
    return (
      <Link to={`/beers/${this.props.id}`}>
        <img src={this.props.img} alt={this.props.name} height="150px"/>
        <h2>{this.props.name}</h2>
        <h3>{this.props.tagline}</h3>
      </Link>
    )
  }
}
