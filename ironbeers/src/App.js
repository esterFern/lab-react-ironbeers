import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import List from './pages/List';
import './App.css';
import BeerDetails from './pages/BeerDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/beers" component={List}/>
          <Route path="/beers/:id" component={BeerDetails}/>
        </Switch>
      </div>
    );
  }
}

export default App;
