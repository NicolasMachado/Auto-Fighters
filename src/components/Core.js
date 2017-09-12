import React, { Component } from 'react';
import '../css/App.css';
import {connect} from 'react-redux';
import {toggleFrameRunning} from '../actions';

class Core extends Component {

  componentWillMount() {
    this.currentFrame = 0;
    if (this.props.frameRunning) {
      this.startInterval();
    }
  }

  componentDidUpdate() {
    if (this.props.frameRunning) {
      this.startInterval();
    } else {
      this.stopInterval();
    }
  }

  startInterval() {
    this.frameInterval = setInterval(() => {
      this.checkFrame();
      this.currentFrame++;
      console.log(this.currentFrame);
    }, 100);
  }

  stopInterval() {
    clearInterval(this.frameInterval);
    this.frameInterval = null;
  }

  checkFrame() {
    if (this.currentFrame === 10) {
      console.log('action!')
    }
  }

  buttonText() {
    return this.props.frameRunning ? 'STOP' : 'START';
  }

  render() {
    return (
      <div className="core">
        <button onClick={() => this.props.dispatch(toggleFrameRunning())}>{this.buttonText()}</button>
      </div>
    );
  }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(Core);
