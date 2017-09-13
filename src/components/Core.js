import React, { Component } from 'react';
import {connect} from 'react-redux';
import {toggleFrameRunning, addFrame} from '../actions';

class Core extends Component {

  componentWillMount() {
    if (this.props.frameRunning) {
      this.startInterval();
    }
  }

  componentDidUpdate() {
    if (this.props.frameRunning && !this.frameInterval) {
      this.startInterval();
    }
    if (!this.props.frameRunning && this.frameInterval) {
      console.log('stopping interval')
      this.stopInterval();
    }
  }

  componentWillUnmount() {
    clearInterval(this.frameInterval);
  }

  checkFrame() {
    console.log('checking')
    if (this.props.currentFrame === this.props.nextActions[0]) {
      this.stopInterval();
      this.props.dispatch(toggleFrameRunning(false));
    } else {
      this.props.dispatch(addFrame());
    }
  }

  startInterval() {
    this.frameInterval = setInterval(() => {
      this.checkFrame();
    }, this.props.frameRate);
  }

  stopInterval() {
    clearInterval(this.frameInterval);
    this.frameInterval = null;
  }

  buttonText() {
    return this.props.frameRunning ? 'STOP' : 'START';
  }

  render() {
    return (
      <div className="core">
        <div>{this.props.currentFrame}</div>
        <button onClick={() => this.props.dispatch(toggleFrameRunning())}>{this.buttonText()}</button>
      </div>
    );
  }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(Core);
