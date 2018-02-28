import React, { Component } from 'react';
import {connect} from 'react-redux';
import {toggleFrameRunning, addLogEntry, startTurn} from '../actions';
import SvgBarChange from './SvgBarChange';

export class Bar extends Component {

  componentWillMount() {
    this.formerValue = 0;
    this.newValue = 0;
    this.differenceValue = 0;
    this.changeType = ''; // damage or heal
  }

  componentDidUpdate() {
    // Check if a fighter is over 100 AP
    if (this.props.type === 'ap' && this.props.amount >= 100 && this.props.frameRunning) {
      this.props.dispatch(toggleFrameRunning(false));
      this.props.dispatch(startTurn(this.props.fighters, this.props.ownerId));
    }
  }

  shouldComponentUpdate(nextProps) {
    // Make sure bar rerenders only if its value has changed
    if (this.props.amount !== nextProps.amount
      || this.props.maxAmount !== nextProps.maxAmount
      || this.props.classBarSide !== nextProps.classBarSide) {
        if (this.props.type !== 'ap') {
          this.triggerBarChangeAnimation(this.props.amount, nextProps.amount)
        }
      return true
    }
    return false
  }

  triggerBarChangeAnimation(formerValue, newValue) {
    const rate = (formerValue - newValue)/20;
    // if value lost
    if (formerValue > newValue) {
      this.changeType = 'dmg';
      this.formerValue = (formerValue/this.props.maxAmount)*100; // former percent value
      this.newValue = (newValue/this.props.maxAmount)*100; // new percent value
      this.differenceValue = this.formerValue - this.newValue; // difference percent value
      setTimeout(() => {
        let timerChange = setInterval(() => {
          this.differenceValue -= rate;
          if (this.formerValue <= this.newValue || this.differenceValue <= 0 || this.differenceValue > this.props.maxAmount) {
            this.formerValue = 0;
            this.newValue = 0;
            this.differenceValue = 0;
            this.forceUpdate();
            clearInterval(timerChange);
          }
          this.forceUpdate();
        }, 15)
      }, 700);
    // else if value gained
  } else if (formerValue < newValue) {
      this.changeType = 'heal';
      this.formerValue = (formerValue/this.props.maxAmount)*100; // former percent value
      this.newValue = (newValue/this.props.maxAmount)*100; // new percent value
      this.differenceValue = -(this.formerValue - this.newValue); // difference percent value
      setTimeout(() => {
        let timerChange = setInterval(() => {
          this.differenceValue += rate;
          if (this.formerValue >= this.newValue || this.differenceValue <= 0 || this.differenceValue > this.props.maxAmount) {
            this.formerValue = 0;
            this.newValue = 0;
            this.differenceValue = 0;
            this.forceUpdate();
            clearInterval(timerChange);
          }
          this.forceUpdate();
        }, 15)
      }, 700);
    }
  }

  getBarColor() {
    if (this.props.type === 'hp') {
      return 'rgb(109, 199, 104)'
    } else if (this.props.type === 'mp') {
      return 'rgb(104, 151, 199)'
    } else if (this.props.type === 'ap') {
      return 'rgb(194, 199, 104)'
    } else if (this.props.type === 'rp') {
      return 'rgb(199, 104, 104)'
    }
  }

  render() {
    return (
      <div className="bar">
        <div className="bar-text">
          {Math.round(this.props.amount)} / {Math.round(this.props.maxAmount)} {this.props.type.toUpperCase()}
        </div>
        <div className={"bar-svg-changing " + this.props.classBarSide}>
          <SvgBarChange
            barWidth={this.differenceValue}
            decal={this.newValue}
            type={this.changeType}
            side={this.props.classBarSide}
          />
        </div>
        <div className={"bar-svg " + this.props.classBarSide}>
          <svg width={((this.props.amount/this.props.maxAmount)*100) + '%'} height="100%">
            <rect width="100%" height="100%" style={{
              'fill': this.getBarColor()
            }} />
          </svg>

        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(Bar);
