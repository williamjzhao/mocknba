import React from 'react';
import PlayerInfo from './PlayerInfo/PlayerInfo';
import PlayerStats from './PlayerStats/PlayerStats';
import classes from './PlayerDescription.css';

const stats = [{stat: 'jumper', value: 10},{stat: 'rumper', value: 20}];

const player = (props) => (
  <div className={classes.PlayerDescription}>
    <PlayerInfo 
      title="Name"
      info="Lebron James" />
    <PlayerInfo
      title="Team"
      info="Lakers" />
    <PlayerStats 
      stats={stats}/>
  </div>
);

export default player;