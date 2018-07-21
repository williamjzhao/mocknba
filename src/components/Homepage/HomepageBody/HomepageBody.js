import React, { Component } from 'react';
import PlayerDisplay from './PlayerDisplay/PlayerDisplay';
import PlayerSelector from './PlayerSelector/PlayerSelector';
import classes from './HomepageBody.css';

class HomepageBody extends Component {
  render() {
    return (
      <div className={classes.HomepageBody}>
        <PlayerSelector direction="left" />
        <PlayerDisplay />
        <PlayerSelector direction="right" />
      </div>
    );
  }
}

export default HomepageBody;