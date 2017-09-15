import React, { Component } from 'react';
import {connect} from 'react-redux';
import {toggleFrameRunning, addLogEntry} from '../actions';

class Bar extends Component {

  componentDidUpdate() {
    if (this.props.type === 'ap' && this.props.amount >= 100 && this.props.frameRunning) {
      this.props.dispatch(addLogEntry("Max AP reached for " + this.props.ownerName));
      this.props.dispatch(toggleFrameRunning(false));
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
          {Math.round(this.props.amount)} / {this.props.maxAmount} {this.props.type.toUpperCase()}
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
