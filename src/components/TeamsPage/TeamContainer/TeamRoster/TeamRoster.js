import React from './react';

const teamRoster = (props) => {
  let players = props.playerRoster;
  return (
    <ul>
    {Object.entries(players).map(([name]) => (
        <li key={name}>
          <strong>{name}</strong>
        </li>
      ))}
    </ul>
  );
}

export default teamRoster;