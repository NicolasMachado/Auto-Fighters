import React, { Component } from 'react';
import {connect} from 'react-redux';
import Bar from './Bar';

class Fighter extends Component {

  renderBars() {
    const barTypes = [
      {
        type: 'hp',
        maxAmount: this.props.fighter.stats.maxHp,
        amount: this.props.fighter.hp
      },
      {
        type: 'mp',
        maxAmount: this.props.fighter.stats.maxMp,
        amount: this.props.fighter.mp
      },
      {
        type: 'rp',
        maxAmount: 100,
        amount: this.props.fighter.rp
      },
      {
        type: 'ap',
        maxAmount: 100,
        amount: this.props.fighter.ap
      }
    ];

    const bars = barTypes.map((bar, i) => {
      let myBar;
      if (typeof bar.amount !== 'undefined') {
        myBar =  <Bar
          key={bar.type}
          type={bar.type}
          maxAmount={bar.maxAmount}
          ownerName={this.props.fighter.name}
          ownerId={this.props.fighter.id}
          classBarSide={this.props.classBarSide}
          amount={bar.amount} />
      }
      return myBar
    });
    return bars
  }

  render() {
    return (
      <div className="fighter-ally">
        <div className="fighter-image">
          {this.props.fighter.name}
        </div>
        {this.renderBars()}
      </div>
    );
  }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(Fighter);
