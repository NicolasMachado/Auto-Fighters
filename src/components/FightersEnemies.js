import React, { Component } from 'react';
import {connect} from 'react-redux';
import {renderFighterFrame} from '../js/common';

class FightersEnemies extends Component {

  render() {
    return (
      <div className="enemies-container">
        {renderFighterFrame(this.props.fighters, 'enemy')}
      </div>
    );
  }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(FightersEnemies);
