import React, { Component, Fragment } from 'react';
import Navbar from '../Navbar/Navbar';

class AboutPage extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <p>This is about me</p>
      </Fragment>
    )
  }
}

export default AboutPage;