import React, { Component } from 'react';
import PlayerDisplay from './PlayerDisplay/PlayerDisplay';
import PlayerSelector from './PlayerSelector/PlayerSelector';
import classes from './HomepageBody.css';
import playerimage from '../../../assets/generic.png';
import teamlogo from '../../../assets/nbalogo.png';

const logos = require.context('../../../assets/logos',true);

class HomepageBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerImg: playerimage,
      teamLogo: teamlogo,
      activePlayer: 'Generic Player',
      activeTeam: 'Harlem Globetrotters',
      stats: {
  
      },
      activeId: null,
      activeCity: 'Location',
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
          selected: false,
          value: 'curry/stephen',
          key: 'playersList',
        },
        {
          id: 1,
          name: 'Lebron James',
          selected: false,
          value: 'james/lebron',
          key: 'playersList',
        }
      ],
    }
  }

  getPlayerAssests = (playerURL) => {
    const imgURL = 'https://nba-players.herokuapp.com/players/' + playerURL;
    const statsURL = 'https://nba-players.herokuapp.com/players-stats/' + playerURL;

    fetch(imgURL)
      .then(response => {
        const newImg = response.url;
        return newImg;
      }).then(newImg => {
        fetch(statsURL)
          .then(res => {
          const teamAbr = res.json();
          return teamAbr;
        }).then(teamAbr => {
          const newTeamLogo = logos('./' + teamAbr.team_acronym +'.png'); 
          this.setState({playerImg: newImg, teamLogo: newTeamLogo});
        })
      });
    }

  toggleSelected = (id, key) => {
    const temp = this.state[key];
    const active = this.state.activeId;
    temp[id].selected = !temp[id].selected;
    if(active != null) {
      temp[active].selected = !temp[active].selected;
    }
    this.setState({
      [key]: temp,
      activeId: id,
      activePlayer: temp[id].name,
    });
    this.getPlayerAssests(temp[id].value);
  }

  render() {
    return (
      <div className={classes.HomepageBody}>
        <PlayerSelector
          title={this.state.activePlayer} 
          list={this.state.playersList}
          toggleItem={this.toggleSelected}/>
        <PlayerDisplay 
          headshot={this.state.playerImg} 
          teamLogo={this.state.teamLogo}
          player={this.state.activePlayer}
          team={this.state.activeTeam}/>
      </div>
    );
  }
}

export default HomepageBody;