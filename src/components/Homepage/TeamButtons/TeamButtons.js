import React from 'react';
import TeamButton from './TeamButton/TeamButton';
import classes from './TeamButtons.css';

const teamButtons = (props) => (
  <div className={classes.TeamButtons}>
    <TeamButton 
      teamNumber = "1"/>
    <TeamButton 
      teamNumber = "2"/>
  </div>
)

export default teamButtons;