import React, { Component } from 'react';

class App extends Component {

  constructor (props, context) {
    super(props, context);
  }

  render () {

    return (
      <div id="layout">
        <div id="main">
          {/* this will render the child routes */}
          {this.props.children}
        </div>
      </div>
  );
  }
}

export default App;
