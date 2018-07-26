import React from 'react';
import classes from './PlayerDisplay.css';
import PlayerDescription from './PlayerDescription/PlayerDescription';
import PlayerAssets from './PlayerAssets/PlayerAssets';

const playerDisplay = (props) => {
  return (
    <div className={classes.Display}>
      <PlayerDescription 
        stats={props.stats}/>
      <PlayerAssets 
        headshot={props.headshot} 
        team={props.teamLogo}/>
    </div>
  );
}

export default playerDisplay;