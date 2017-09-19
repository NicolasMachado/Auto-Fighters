import React, { Component } from 'react';
import {connect} from 'react-redux';
import Bar from './Bar';

class Fighter extends Component {

  componentDidUpdate() {
    console.log('update')
  }

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
          ownerId={this.props.fighterId}
          classBarSide={this.props.classBarSide}
          amount={bar.amount} />
      }
      return myBar
    });
    return bars
  }

  renderHpBar() {
    if (typeof this.props.fighter.hp !== 'undefined') {
      return <Bar
        type={'hp'}
        amount={this.props.fighter.hp}
        maxAmount={this.props.fighter.stats.maxHp}
        ownerName={this.props.fighter.name}
        ownerId={this.props.fighterId}
        classBarSide={this.props.classBarSide} />
    }
  }

  renderMpBar() {
    if (typeof this.props.fighter.mp !== 'undefined') {
      return <Bar
        type={'mp'}
        amount={this.props.fighter.mp}
        maxAmount={this.props.fighter.stats.maxMp}
        ownerName={this.props.fighter.name}
        ownerId={this.props.fighterId}
        classBarSide={this.props.classBarSide} />
    }
  }

  renderRpBar() {
    if (typeof this.props.fighter.rp !== 'undefined') {
      return <Bar
        type={'rp'}
        amount={this.props.fighter.rp}
        maxAmount={100}
        ownerName={this.props.fighter.name}
        ownerId={this.props.fighterId}
        classBarSide={this.props.classBarSide} />
    }
  }

  renderApBar() {
    if (typeof this.props.fighter.ap !== 'undefined') {
      return <Bar
        type={'ap'}
        amount={this.props.fighter.ap}
        maxAmount={100}
        ownerName={this.props.fighter.name}
        ownerId={this.props.fighterId}
        classBarSide={this.props.classBarSide} />
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
