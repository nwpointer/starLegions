import React from 'react';
import Layout from './Layout';

const ProgressBar = React.createClass({
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

const CommandInput = React.createClass({
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

const MainBody = React.createClass({
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
    return <div>
      <div ref="terminal" className="terminal">
        <p>You see a dark forbidding planet of <span className="highlight">pure evil.</span></p>
        <div className="description">
          <p>Your scans show:</p>
          <ul>
            <li>An Asteroid belt</li>
            <li>Mineral Rich Moon</li>
          </ul>
        </div>
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
      </div>
      <CommandInput />
    </div>;
  }
});

const NavBar = React.createClass({
  render() {
    return <div className="menu">
      <h3 className="brand">Star Legions</h3>
    </div>
  }
});

export default React.createClass({
  render() {
    return (
      <Layout navBar={<NavBar/>} mainBody={<MainBody/>}></Layout>
    );
  }
});
