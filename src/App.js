import React, { Component } from 'react';
import {connect} from 'react-redux';
import FightersAllies from './components/FightersAllies';
import Core from './components/Core';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Core />
        {this.props.titleGame}
        <FightersAllies />
      </div>
    );
  }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(App);
