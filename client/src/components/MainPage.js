import React from 'react';
import NavBar from './NavBar';
import CommandInput from './CommandInput';
import HealthCheck from './commands/HealthCheck';
import Scan from './commands/Scan';

export default React.createClass({
  fixScroll() {
    var {terminal} = this.refs;
    if (terminal) {
      setTimeout(() => {
        terminal.scrollTop = terminal.scrollHeight;
      }, 200);
    }
  },
  componentDidMount() {
    this.fixScroll();
  },
  componentDidUpdate() {
    this.fixScroll();
  },
  render() {
    return (
      <div className="layout">
        <div className="nav-bar">
          <NavBar />
        </div>
        <div className="main-body">
          <div ref="terminal" className="terminal">
            <HealthCheck />
            <Scan />
          </div>
          <CommandInput />
        </div>
      </div>
    );
  }
});
