import React from 'react';
import classes from './CompareOption.css';

const compareOption = (props) => {
  return (
    <div className={classes.CompareOption} onClick={props.click}>
      Compare Teams
    </div>
  );
}

export default compareOption;