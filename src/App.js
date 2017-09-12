import React, { Component } from 'react';
import {connect} from 'react-redux';
import FightersLeft from './components/FightersLeft';
import Core from './components/Core';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Core />
        {this.props.titleGame}
        <FightersLeft />
      </div>
    );
  }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(App);
