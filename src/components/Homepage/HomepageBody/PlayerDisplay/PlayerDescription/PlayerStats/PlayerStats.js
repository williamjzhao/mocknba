import React from 'react';
import classes from './PlayerStats.css';

const playerStats = (props) => {
  const stats = props.stats;
  console.log(stats);
  return (
    <div className={classes.PlayerStats}>
      {stats.map(stat => (
        <div key={stat.stat}>
          <strong>{stat.stat}: </strong><span>{stat.value}</span>
        </div>
      ))}
    </div>
  );
}

export default playerStats;