import React, { Fragment } from 'react';
import classes from './PlayerStats.css';

const playerStats = (props) => {
  const stats = props.stats;
  console.log(stats);
  return (
    <Fragment>
      {stats.map(stat => (
        <div key={stat.stat}>
          <strong>{stat.stat}: </strong><span>{stat.value}</span>
        </div>
      ))}
    </Fragment>
  );
}

export default playerStats;