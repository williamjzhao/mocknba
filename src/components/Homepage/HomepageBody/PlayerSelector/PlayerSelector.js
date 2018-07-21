import React from 'react';
import classes from './PlayerSelector.css';

const playerSelector = (props) => (
  <div className={classes.PlayerSelector}>
    <button onClick={props.getAssets}>{props.direction}</button>
  </div>
  //get server from data on press
);

export default playerSelector;