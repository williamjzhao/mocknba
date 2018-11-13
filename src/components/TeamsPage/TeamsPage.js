import React, { Component, Fragment } from 'react';
import Navbar from '../Navbar/Navbar';
import classes from './TeamsPage.css';
import OptionsBar from './OptionsBar/OptionsBar';

class TeamsPage extends Component {
  render() {
    return (
      <div className={classes.TeamsPage}>
        <Navbar/>
        <OptionsBar />
      </div>
    )
  }
}

export default TeamsPage;