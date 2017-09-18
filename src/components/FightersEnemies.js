import React, { Component } from 'react';
import Fighter from './Fighter'
import {connect} from 'react-redux';

class FightersEnemies extends Component {

  renderEnemies() {
    const enemies = this.props.enemiesList.map((key) => {
      return (<Fighter
          key = {key}
          fighterId={key}
          fighter = {this.props.fighters[key]}
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
