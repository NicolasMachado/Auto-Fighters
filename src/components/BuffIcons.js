import React, { Component } from 'react';
import {connect} from 'react-redux';

class BuffIcons extends Component {
  render() {
    return (
      <div className="buff-icons">
        Buff bar
      </div>
    );
  }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(BuffIcons);
