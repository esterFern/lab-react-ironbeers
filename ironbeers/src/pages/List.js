import React, { Component } from 'react'
import beersService from '../services/beersService';
import Beer from '../components/Beer';
import Navbar from '../components/Navbar';
import Search from '../components/Search';

export default class List extends Component {

  state = {
    beers: []
  }
  componentDidMount() {
    this.getBeersList();
  }

  getBeersList = () => {
    beersService.getAll()
      .then(data => {
        this.setState({
          beers: data
        })
      })
      .catch(error => console.log(error));

  }

  handleSearch = (search) => {
    if (search === '') {
      this.getBeersList();
    } else {
      beersService.searchBeers(search)
        .then(data => {
          this.setState({
            beers: data
          })
        })
        .catch(error => console.log(error));
    }
  }

  renderList() {
    return this.state.beers.map((e, index) => {
      return <Beer
        key={`id-${index}`}
        id={e._id}
        name={e.name}
        img={e.image_url}
        tagline={e.tagline}
      />
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <Search search={this.handleSearch} />
        {this.renderList()}
      </div>
    )
  }
}
