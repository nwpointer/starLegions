import React from 'react';

export default React.createClass({
  propTypes: {
    navBar: React.PropTypes.any,
    mainBody: React.PropTypes.any
  },
  render() {
    return (
      <div className="layout">
        <div className="nav-bar">
          {this.props.navBar}
        </div>
        <div className="main-body">
          {this.props.mainBody}
        </div>
      </div>
    );
  }
});
