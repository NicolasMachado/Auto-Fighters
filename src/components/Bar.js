import React, { Component } from 'react';
import {connect} from 'react-redux';
import {toggleFrameRunning, addLogEntry, startTurn} from '../actions';
import SvgBarChange from './SvgBarChange';

export class Bar extends Component {

  componentWillMount() {
    this.changedBarValue = 0;
    this.formerValue = 0;
    this.newValue = 0;
  }

  componentDidUpdate() {
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
    if (formerValue >= newValue) {
      this.changedBarValue = (formerValue/this.props.maxAmount)*100;
      this.formerValue = (formerValue/this.props.maxAmount)*100;
      this.newValue = (newValue/this.props.maxAmount)*100;
      const rate = (formerValue - newValue)/20;
      setTimeout(() => {
        let timerChange = setInterval(() => {
          this.changedBarValue -= rate;
          if(this.changedBarValue <= this.newValue || this.changedBarValue <= 0 || this.changedBarValue > this.props.maxAmount) {
            this.changedBarValue = 0;
            this.formerValue = 0;
            this.newValue = 0;
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
          <SvgBarChange barWidth={this.changedBarValue} />
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
