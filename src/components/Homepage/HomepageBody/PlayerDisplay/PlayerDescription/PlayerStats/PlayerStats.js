import React, { Fragment } from 'react';
import classes from './PlayerStats.css';

const playerStats = (props) => {
  console.log(JSON.parse(props.stats));
  const stats = props.stats;
  return (
    <Fragment>
      {stats.map(stat => (
        <div key={stat.name}>
          <strong>{stat}: </strong><span>{stat.value}</span>
        </div>
      ))}
    </Fragment>
  );
}

export default playerStats;