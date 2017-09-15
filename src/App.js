import React, { Component } from 'react';
import {connect} from 'react-redux';
import FightersAllies from './components/FightersAllies';
import FightersEnemies from './components/FightersEnemies';
import CombatLog from './components/CombatLog';
import Core from './components/Core';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Core />
        {this.props.titleGame}
        <div className="all-fighters">
          <FightersAllies />
          <CombatLog />
          <FightersEnemies />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(App);
