import React from 'react';
import classes from './TeamButton.css';

const teamButton = (props) => (
  <div className={classes.TeamButton}>
    Team {props.teamNumber}
  </div>
  //send a post to the server or something
)

export default teamButton;