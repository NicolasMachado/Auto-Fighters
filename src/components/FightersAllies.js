import React, { Component } from 'react';
import Fighter from './Fighter'
import {connect} from 'react-redux';

class FightersAllies extends Component {

  renderAllies() {
    const allies = this.props.fighters.allies.map((ally) => {
      return (<Fighter
          key = {ally.id}
          fighter = {ally}
          classBarSide='ally-bar'
        />)
    })
    return allies
  }

  render() {
    return (
      <div className="allies-container">
        {this.renderAllies()}
      </div>
    );
  }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(FightersAllies);
