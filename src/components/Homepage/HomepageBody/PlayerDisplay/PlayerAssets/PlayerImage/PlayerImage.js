import React from 'react';
import classes from './PlayerImage.css';

const playerImage = (props) => (
  console.log(props.headshot),
  <div className={classes.PlayerImage}>
    <img src={props.headshot} alt='null' />
  </div>
)

export default playerImage;