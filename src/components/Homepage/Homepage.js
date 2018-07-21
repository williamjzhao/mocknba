import React, { Component, Fragment } from 'react';
import Navbar from '../Navbar/Navbar';
import HomepageBody from './HomepageBody/HomepageBody';
import TeamButtons from './TeamButtons/TeamButtons';
import classes from './Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div className={classes.Homepage}>
        <Navbar />
        <HomepageBody team='cle'/>
        <TeamButtons />
      </div>
    );
  }
}

export default Homepage;