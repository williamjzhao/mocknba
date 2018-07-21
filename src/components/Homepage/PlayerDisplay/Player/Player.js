import React from 'react';
import PlayerInfo from './PlayerInfo/PlayerInfo';
import PlayerStats from './PlayerStats/PlayerStats';
import classes from './Player.css';

const player = (props) => (
  <div className={classes.Player}>
    <PlayerInfo 
      title="Name"
      info="Lebron James" />
    <PlayerInfo
      title="Team"
      info="Lakers" />
    <PlayerStats />
  </div>
);

export default player;