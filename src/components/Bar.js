import React, { Component } from 'react';
import {connect} from 'react-redux';

class Bar extends Component {

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

  getPercentWidth() {
    return ((this.props.amount/this.props.maxAmount)*100) + '%';
  }

  render() {
    return (
      <div className="bar">
        <div className="bar-text">
          {this.props.amount} / {this.props.maxAmount} {this.props.type.toUpperCase()}
        </div>
        <div className="bar-svg">
          <svg width={this.getPercentWidth()} height="100%">
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
