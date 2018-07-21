import React from 'react';
import classes from './PlayerInfo.css';

const playerInfo = (props) => {
  return (
    <div className={classes.PlayerInfo}>
      <strong>{props.title}:</strong><span>{props.info}</span>
    </div>
  );
}

export default playerInfo;