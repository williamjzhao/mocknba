import React from 'react';
import classes from './PlayerTeam.css';

const playerTeam = (props) => (
  <div className={classes.PlayerTeam}>
    <img src={props.team} alt="noteam" />
  </div>
)

export default playerTeam;