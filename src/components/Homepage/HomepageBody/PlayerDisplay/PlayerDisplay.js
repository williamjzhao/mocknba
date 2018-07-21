import React from 'react';
import classes from './PlayerDisplay.css';
import Player from './Player/Player';
import PlayerAssets from './PlayerAssets/PlayerAssets';

const playerDisplay = (props) => {
  return (
    <div className={classes.Display}>
      <Player />
      <PlayerAssets headshot={props.headshot} team={props.team}/>
    </div>
  );
}

export default playerDisplay;