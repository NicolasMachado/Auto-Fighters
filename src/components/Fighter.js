import React, { Component } from 'react';
import {connect} from 'react-redux';
import Bar from './Bar';

class Fighter extends Component {

  renderHpBar() {
    if (this.props.fighter.hp) {
      return <Bar type='hp' maxAmount={this.props.fighter.stats.maxHp} amount={this.props.fighter.hp} />
    }
  }

  renderMpBar() {
    if (this.props.fighter.mp) {
      return <Bar type='mp' maxAmount={this.props.fighter.stats.maxMp} amount={this.props.fighter.mp} />
    }
  }

  renderApBar() {
    if (this.props.fighter.ap) {
      return <Bar type='ap' maxAmount={100} amount={this.props.fighter.ap} />
    }
  }

  renderRpBar() {
    if (this.props.fighter.rp) {
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
