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
    player: 'Generic Player',
    playerTeam: 'Harlem Globetrotters',
    stats: {

    },
    location: [
      {
          id: 0,
          title: 'New York',
          selected: false,
          key: 'location'
      },
      {
        id: 1,
        title: 'Dublin',
        selected: false,
        key: 'location'
      },
      {
        id: 2,
        title: 'California',
        selected: false,
        key: 'location'
      },
      {
        id: 3,
        title: 'Istanbul',
        selected: false,
        key: 'location'
      },
      {
        id: 4,
        title: 'Izmir',
        selected: false,
        key: 'location'
      },
      {
        id: 5,
        title: 'Oslo',
        selected: false,
        key: 'location'
      }
    ],
    playersList: [
      {
        id: 0,
        name: 'Steph Curry',
        selected: 'false',
        value: 'curry/steph',
        key: 'playersList',
      },
      {
        id: 1,
        name: 'Lebron James',
        selected: 'false',
        value: 'james/lebron',
        key: 'playersList',
      }
    ],
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
        <PlayerSelector
          title="Select Player" 
          list={this.state.location}/>
        <PlayerDisplay 
          headshot={this.state.playerImg} 
          team={this.state.teamLogo}/>

      </div>
    );
  }
}

export default HomepageBody;