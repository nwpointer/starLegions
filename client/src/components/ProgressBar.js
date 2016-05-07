import React from 'react';

export default React.createClass({
  propTypes: {
    percent: React.PropTypes.string,
    className: React.PropTypes.string
  },
  render() {
    return (
      <div className={`progress-bar`}>
        <div className="bar">
          <div className={`${this.props.className}`} style={{width: this.props.percent}}>
          </div>
        </div>
        <div className={`percent`}>
          <p>
            {this.props.percent}
          </p>
        </div>
      </div>
    );
  }
});

