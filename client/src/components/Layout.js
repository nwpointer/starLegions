import React from 'react';

export default React.createClass({
  propTypes: {
    leftColumn: React.PropTypes.any,
    mainBody: React.PropTypes.any
  },
  render() {
    return (
      <div className="layout">
        <div className="left-column">
          {this.props.leftColumn}
        </div>
        <div className="main-body">
          {this.props.mainBody}
        </div>
      </div>
    );
  }
});
