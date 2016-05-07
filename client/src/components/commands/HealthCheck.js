import React from 'react';
import ProgressBar from '../ProgressBar';

export default React.createClass({
  render() {
    return (
      <div className="card">
        <h4>Status Report</h4>
        <div className="two-column">
          <div className="left">
            <p>Health</p>
            <ProgressBar percent="80%" className="health" />
          </div>
          <div className="right">
            <p>Energy</p>
            <ProgressBar percent="100%" className="energy" />
          </div>
        </div>
      </div>
    );
  }
});

