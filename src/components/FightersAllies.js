import React, { Component } from 'react';
import Fighter from './Fighter'
import {connect} from 'react-redux';

class FightersAllies extends Component {

  renderAllied() {
    const allies = this.props.fighters.allies.map((ally) => {
      return (<Fighter
          key = {ally.name}
          fighter = {ally}
        />)
    })
    return allies
  }

  render() {
    return (
      <div className="allies-container">
        {this.renderAllied()}
      </div>
    );
  }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(FightersAllies);
