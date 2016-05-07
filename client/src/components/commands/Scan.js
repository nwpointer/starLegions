import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        <p>You see a dark forbidding planet of <span className="highlight">pure evil.</span></p>
        <div className="description">
          <p>Your scans show:</p>
          <ul>
            <li>An Asteroid belt</li>
            <li>Mineral Rich Moon</li>
          </ul>
        </div>
      </div>
    );
  }
});

