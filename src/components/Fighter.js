import React, { Component } from 'react';
import {connect} from 'react-redux';
import Bar from './Bar';

class Fighter extends Component {

  renderHpBar() {
    if (typeof this.props.fighter.hp !== 'undefined') {
      return <Bar type='hp' maxAmount={this.props.fighter.stats.maxHp} amount={this.props.fighter.hp} />
    }
  }

  renderMpBar() {
    if (typeof this.props.fighter.mp !== 'undefined') {
      return <Bar type='mp' maxAmount={this.props.fighter.stats.maxMp} amount={this.props.fighter.mp} />
    }
  }

  renderApBar() {
    if (typeof this.props.fighter.ap !== 'undefined') {
      return <Bar type='ap' maxAmount={100} amount={this.props.fighter.ap} />
    }
  }

  renderRpBar() {
    if (typeof this.props.fighter.rp !== 'undefined') {
      return <Bar type='rp' maxAmount={100} amount={this.props.fighter.rp} />
    }
  }

  render() {
    return (
      <div className="fighter-ally">
        <div className="fighter-image">
          {this.props.fighter.name}
        </div>
        {this.renderHpBar()}
        {this.renderMpBar()}
        {this.renderRpBar()}
        {this.renderApBar()}
      </div>
    );
  }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(Fighter);
