import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Hello from './Hello'
import GoodBye from './GoodBye'
import SayIt from './SayIt'
import './application.css';

class Application extends Component {

render() {
  return  <Router>
            <Route path="/say_it/:foo" render={(routeProps) => (
              <SayIt routeProps={routeProps}/>
            )} />
            <Route exact path="/good_bye" render={() => (
              <GoodBye />
            )} />
            <Route exact path="/" render={() => (
              <Hello />
            )} />
          </Router>
  }
}

export default Application;
