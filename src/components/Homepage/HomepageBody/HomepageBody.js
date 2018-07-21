import React, { Component } from 'react';
import PlayerDisplay from './PlayerDisplay/PlayerDisplay';
import PlayerSelector from './PlayerSelector/PlayerSelector';
import classes from './HomepageBody.css';
import playerimage from '../../../assets/generic.png';
import teamlogo from '../../../assets/nbalogo.png';

const logos = require.context('../../../assets/logos',true);

class HomepageBody extends Component {
  state = {
    playerImg: playerimage,
    teamLogo: teamlogo,
  }

  getNewAssets = () => {
    fetch('https://nba-players.herokuapp.com/players/curry/stephen')
      .then(response => {
        console.log(response);
        const newImg = response.url;
        return newImg;
      }).then(newImg => {
        const newLogo = logos('./' + this.props.team +'.png'); 
        this.setState({playerImg: newImg, teamLogo: newLogo});
      });
  }
  render() {
    return (
      <div className={classes.HomepageBody}>
        <PlayerSelector getAssets={this.getNewAssets} direction="left" />
        <PlayerDisplay headshot={this.state.playerImg} team={this.state.teamLogo}/>
        <PlayerSelector direction="right" />
      </div>
    );
  }
}

export default HomepageBody;