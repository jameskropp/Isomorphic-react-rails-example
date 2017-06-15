import PropTypes from 'prop-types';
import React from 'react';

export default class LandingHeader extends React.Component {
  render() {
    return (
      <header className="landing-Header">
        <div className="header-server-logo">
        </div>
        <div className="header-button-container">
          <a href="#">
            <div className="landing-button login">
              <p>Log in</p>
            </div>
          </a>
          <a href="#">
            <div className="landing-button signup">
              <p>Sign up</p>
            </div>
          </a>
        </div>
      </header>
    )
  }
}
