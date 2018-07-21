import React, { Component, Fragment } from 'react';
import Navbar from '../Navbar/Navbar';
import PlayerDisplay from './PlayerDisplay/PlayerDisplay';

class Homepage extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <PlayerDisplay />
      </Fragment>
    );
  }
}

export default Homepage;