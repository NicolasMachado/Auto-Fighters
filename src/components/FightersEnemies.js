import React, { Component } from 'react';
import Fighter from './Fighter'
import {connect} from 'react-redux';

class FightersEnemies extends Component {

  renderEnemies() {
    const enemies = this.props.fighters.enemies.map((enemy) => {
      return (<Fighter
          key = {enemy.id}
          fighter = {enemy}
          classBarSide='enemy-bar'
        />)
    })
    return enemies
  }

  render() {
    return (
      <div className="enemies-container">
        {this.renderEnemies()}
      </div>
    );
  }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(FightersEnemies);
