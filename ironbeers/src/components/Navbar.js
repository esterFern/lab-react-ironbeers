import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import home from '../images/home.png';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/"><img src={home} alt="home" width="40px"/></Link>
      </div>
    )
  }
}
