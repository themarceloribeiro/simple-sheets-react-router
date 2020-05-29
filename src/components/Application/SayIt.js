import React, { Component } from 'react';
import './application.css';

class SayIt extends Component {

render() {
    const params = this.props.routeProps.match.params

    return  <div className="Application">
              <h1>Saying: {params.foo}</h1>
            </div>
  }
}

export default SayIt;
