import React from 'react';
import Layout from './Layout';

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
      <div>&gt;<input ref="command" type="text" onClick={this.onInputBlur} onBlur={this.onInputBlur} defaultValue={this.defaultValue}/></div>
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
        <p>You see a dark forbidding planet of <span className="highlight">pure evil.</span></p>
        <div className="description">
          <p>Your scans show:</p>
          <ul>
            <li>An Asteroid belt</li>
            <li>Mineral Rich Moon</li>
          </ul>
        </div>
        <p>You see a dark forbidding planet of <span className="highlight">pure evil.</span></p>
        <div className="description">
          <p>Your scans show:</p>
          <ul>
            <li>An Asteroid belt</li>
            <li>Mineral Rich Moon</li>
          </ul>
        </div>
        <p>You see a dark forbidding planet of <span className="highlight">pure evil.</span></p>
        <div className="description">
          <p>Your scans show:</p>
          <ul>
            <li>An Asteroid belt</li>
            <li>Mineral Rich Moon</li>
          </ul>
        </div>
      </div>
      <CommandInput />
    </div>;
  }
});

const LeftColumn = React.createClass({
  render() {
    return <div className="menu">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Bridge</a></li>
        <li><a href="#">Engineering</a></li>
        <li><a href="#">Profile</a></li>
      </ul>
    </div>
  }
});

export default React.createClass({
  render() {
    return (
      <Layout leftColumn={<LeftColumn/>} mainBody={<MainBody/>}></Layout>
    );
  }
});
