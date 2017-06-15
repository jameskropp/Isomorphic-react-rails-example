import PropTypes from 'prop-types';
import React from 'react';
import Footer from './Footer'
import LandingHeader from './LandingHeader'

export default class Landing extends React.Component {
  render() {
    return (
      <div className="landing-container">
        <div className="landing-dashboard">
          <LandingHeader />
          <div className="dashboard-container">
            <div className="dashboard-title">
              <h1>Server-Side - React/Rails.</h1>
            </div>
            <div className="dashboard-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>In vulputate diam sed magna posuere, sit amet dapibus lacus sollicitudin. </p>
              <p>Nulla rhoncus diam at mauris.</p>
            </div>
            <div className="dashboard-button-container">
              <a href="#">
                <div className="dashboard-button">
                  <p>GET STARTED</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Footer logo={this.props.logo} instagram={this.props.instagram} twitter={this.props.twitter} medium={this.props.medium} />
      </div>
    )
  }
}

