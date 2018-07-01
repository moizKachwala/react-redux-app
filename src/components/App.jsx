import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {

    constructor (props, context) {
        super(props, context);
    }

    render () {

    return (
      <div className="layout">
        <main role="main">
            <div className="container">
              {/* this will render the child routes */}
              {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
