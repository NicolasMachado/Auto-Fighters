import React, { Component } from 'react';
import Fighter from './Fighter'
import {connect} from 'react-redux';

class FightersAllies extends Component {

  renderAllies() {
    const allies = this.props.alliesList.map((key) => {
      return (<Fighter
          key = {key}
          fighterId={key}
          fighter = {this.props.fighters[key]}
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
