import React from 'react';
import TeamButton from './TeamButton/TeamButton';
import classes from './TeamButtons.css';

const teamButtons = (props) => (
  <div className={classes.TeamButtons}>
    <TeamButton 
      teamNumber = "1"
      select={props.selectTeam}
      add={props.addStats}
      stats={props.curStats}/>
    <TeamButton 
      teamNumber = "2"
      select={props.selectTeam}
      add={props.addStats}
      stats={props.curStats}/>
  </div>
)

export default teamButtons;