import React, { Component } from 'react';
import {connect} from 'react-redux';

class CombatLog extends Component {

  render() {
    return (
      <div className="combat-log">
        COMBAT LOG
      </div>
    );
  }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(CombatLog);
