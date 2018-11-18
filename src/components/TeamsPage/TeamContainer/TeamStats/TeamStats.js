import React from './react';

const teamStats = (props) => {
  let stats = props.teamStats;
  return (
    <ul>
    {Object.entries(stats).map(([stat, value]) => (
        <li key={stat}>
          <strong>{stat}: </strong><span>{value}</span>
        </li>
      ))}
    </ul>
  );
}

export default teamStats;