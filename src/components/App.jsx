import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {

    static propTypes = {
        children: PropTypes.any
    }

    constructor (props, context) {
        super(props, context);
    }

    render () {

    return (
      <div className="container">
        <div id="main">
          {/* this will render the child routes */}
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
