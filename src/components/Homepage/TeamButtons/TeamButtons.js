import React from 'react';
import TeamButton from './TeamButton/TeamButton';
import classes from './TeamButtons.css';

const teamButtons = (props) => (
  <div className={classes.TeamButtons}>
    <TeamButton />
    <TeamButton />
  </div>
)

export default teamButtons;