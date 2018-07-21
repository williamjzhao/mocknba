import React from 'react';
import classes from './PlayerDisplay.css';
import Player from './Player/Player';

const playerDisplay = (props) => {
  return (
    <div className={classes.Display}>
      <Player />
    </div>
  );
}

export default playerDisplay;