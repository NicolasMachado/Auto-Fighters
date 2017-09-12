import React, { Component } from 'react';
import '../css/App.css';
import {connect} from 'react-redux';
import {addTickFrame} from '../actions'

class Core extends Component {

  componentWillMount() {
    this.props.dispatch(addTickFrame());
  }

  render() {
    return (
      <div className="core">
      </div>
    );
  }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(Core);
