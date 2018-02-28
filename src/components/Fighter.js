import React, { Component } from 'react';
import {connect} from 'react-redux';
import Bar from './Bar';
import BuffIcons from './BuffIcons';

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
          ownerId={this.props.fighterId}
          classBarSide={this.props.classBarSide}
          amount={bar.amount} />
      }
      return myBar
    });
    return bars
  }

  renderSkillsBar() {
    console.log(this.props.fighter.side)
    const skills =  this.props.fighter.skills.map((s, i) => {
      return (<div className="skill-icon" key={i}>
        {i+1}
      </div>)
    })
    return skills
  }

  render() {
    return (
      <div className="fighter-ally">
        <div className="fighter-image">
          <BuffIcons fighter={this.props.fighter} />
          {this.props.fighter.name}
        </div>
        <div className="skills-bar">
          {this.renderSkillsBar()}
        </div>
        {this.renderBars()}
      </div>
    );
  }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(Fighter);
