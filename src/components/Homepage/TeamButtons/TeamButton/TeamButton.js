import React from 'react';
import classes from './TeamButton.css';


const teamButton = (props) => {
  function selectTeam() {
    props.select(props.teamNumber);
    props.add(props.teamNumber, props.stats);
  }
  return(
    <div className={classes.TeamButton} onClick={selectTeam}>
      Team {props.teamNumber}
    </div>
  );
  //send a post to the server or something
}

export default teamButton;