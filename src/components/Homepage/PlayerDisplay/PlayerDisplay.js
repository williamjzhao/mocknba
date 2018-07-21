import React from 'react';
import classes from './PlayerDisplay.css';
import PlayerInfo from './Player/PlayerInfo/PlayerInfo';
import PlayerStats from './Player/PlayerStats/PlayerStats';

const playerDisplay = (props) => {
  return (
    <div className={classes.Display}>
      <PlayerInfo 
        title="Name"
        info="Lebron James" />
      <PlayerInfo
        title="Team"
        info="Lakers" />
      <PlayerStats />
    </div>
  );
}

export default playerDisplay;