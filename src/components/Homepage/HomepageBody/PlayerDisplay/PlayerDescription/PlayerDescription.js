import React from 'react';
import PlayerStats from './PlayerStats/PlayerStats';
import classes from './PlayerDescription.css';

const player = (props) => (
  <div className={classes.PlayerDescription}>
    <PlayerStats 
      stats={props.stats}/>
  </div>
);

export default player;