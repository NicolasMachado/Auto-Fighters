import React, { Component } from 'react';
import {connect} from 'react-redux';
import {renderFighterFrame} from '../common';

class FightersAllies extends Component {

  render() {
    return (
      <div className="allies-container">
        {renderFighterFrame(this.props.fighters, 'ally')}
      </div>
    );
  }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(FightersAllies);
