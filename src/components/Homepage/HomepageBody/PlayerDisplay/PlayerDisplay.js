import React from 'react';
import classes from './PlayerDisplay.css';
import PlayerDescription from './PlayerDescription/PlayerDescription';
import PlayerAssets from './PlayerAssets/PlayerAssets';

const playerDisplay = (props) => {
  return (
    <div className={classes.Display}>
      <PlayerDescription />
      <PlayerAssets headshot={props.headshot} team={props.team}/>
    </div>
  );
}

export default playerDisplay;