import React from 'react';

export default React.createClass({
  defaultValue: `Type command...`,
  onInputBlur(e) {
    var value = this.refs.command.value;
    if (value === this.defaultValue) {
      this.refs.command.value = '';
    } else {
      this.refs.command.value = this.defaultValue;
    }
  },
  componentDidMount() {

  },
  render() {
    return (
      <div className="command-input">
        &gt;<input ref="command"
                   type="text"
                   onClick={this.onInputBlur}
                   onBlur={this.onInputBlur}
                   defaultValue={this.defaultValue}/>
      </div>
    );
  }
});

