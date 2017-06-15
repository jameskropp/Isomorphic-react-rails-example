import PropTypes from 'prop-types';
import React from 'react';

export default class serverFooter extends React.Component {

  render() {
    return (
      <footer className="server-footer-container row">
        <div className="server-logos-container">
          <p>COPYRIGHT @ 2017 SERVERSIDE TECHNOLOGIES</p>
          <div>
            <img src={this.props.instagram} alt="logo" className="social-media-logos" />
            <img src={this.props.twitter} alt="logo" className="social-media-logos" />
            <img src={this.props.medium} alt="logo" className="social-media-logos" />
          </div>
          <div className="made-in">
            <p>Made in Gastown, Vancouver.</p>
          </div>
        </div>
        <div className="server-links-container">
          <div className="server-link-column non-mobile">
            <a href="#">
              <p>Log In</p>
            </a>
            <a href="#">
              <p>Create an Account</p>
            </a>
            <a href="#">
              <p>My Profile</p>
            </a>
            <a href="#">
              <p>Sign Out</p>
            </a>
          </div>
          <div className="server-link-column">
            <p>About</p>
            <p>Contact</p>
            <p>Terms</p>
            <p>Privacy</p>
          </div>
        </div>
      </footer>
    )
  }
}
