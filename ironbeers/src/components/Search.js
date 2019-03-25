import React, { Component } from 'react'

export default class Search extends Component {

  state = {
    input: ''
  }

  handleChange = async (e) =>{
    await this.setState({
      input: e.target.value
    });
    this.props.search(this.state.input);
  }

  render() {
    return (
      <input value={this.state.input} name="search" onChange={this.handleChange} placeholder="Search" className="input-search"></input>
    )
  }
}
