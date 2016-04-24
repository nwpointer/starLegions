import React from 'react';
import Layout from './Layout';

const MainBody = React.createClass({
  render() {
    return <div>
      <div className="terminal">
        <p>You see a dark forbidding planet of <span className="highlight">pure evil.</span></p>
        <div className="description">
          <p>Your scans show:</p>
          <ul>
            <li>An Asteroid belt</li>
            <li>Mineral Rich Moon</li>
          </ul>
        </div>
      </div>
      <div>&gt;<input type="text" defaultValue={`Type command...`}/></div>
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
