import React, { Component } from 'react';
import {connect} from 'react-redux';

class CombatLog extends Component {

  returnLog() {
    const log = this.props.log.map((message, i) => {
      return <div key={i}>{message}</div>
    });
    return log
  }

  render() {
    return (
      <div className="combat-log">
        <h2>Combat Log</h2>
        {this.returnLog()}
      </div>
    );
  }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(CombatLog);
