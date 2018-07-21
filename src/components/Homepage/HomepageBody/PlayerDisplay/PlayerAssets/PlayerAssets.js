import React from 'react';
import PlayerImage from './PlayerImage/PlayerImage';
import PlayerTeam from './PlayerTeam/PlayerTeam';
import classes from './PlayerAssets.css';

const playerAssets = (props) => (
  <div className={classes.PlayerAssets}>
    <PlayerImage headshot={props.headshot} />
    <PlayerTeam team={props.team} />
  </div>
)

export default playerAssets;