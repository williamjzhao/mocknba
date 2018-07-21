import React from 'react';
import classes from './PlayerImage.css';

const playerImage = (props) => (
  <div className={classes.PlayerImage}>
    <img src={props.headshot} alt='null' />
  </div>
)

export default playerImage;