import React, { Fragment } from 'react';

const playerStats = (props) => {
  let stats = props.stats;
  return (
    <Fragment>
      {Object.entries(stats).map(([stat, value]) => (
        <div key={stat}>
          <strong>{stat}: </strong><span>{value}</span>
        </div>
      ))}
    </Fragment>
  );
}

export default playerStats;