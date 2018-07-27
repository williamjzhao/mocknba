import React from 'react';
import PlayerInfo from './PlayerInfo/PlayerInfo';
import PlayerStats from './PlayerStats/PlayerStats';
import classes from './PlayerDescription.css';
import PlayerAssets from './PlayerAssets/PlayerAssets';

const stats = [{stat: 'jumper', value: 10},{stat: 'rumper', value: 20}];

const player = (props) => (
  <div className={classes.PlayerDescription}>
    <PlayerStats 
      stats={props.stats}/>
  </div>
);

export default player;