import React, { PureComponent } from 'react';
import PlayerDisplay from './PlayerDisplay/PlayerDisplay';
import PlayerSelector from './PlayerSelector/PlayerSelector';
import classes from './HomepageBody.css';
import playerimage from '../../../assets/generic.png';
import teamlogo from '../../../assets/nbalogo.png';

const logos = require.context('../../../assets/logos',true);

class HomepageBody extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      playerImg: playerimage,
      teamLogo: teamlogo,
      activePlayer: 'Generic Player',
      activeId: null,
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
      stats: {
        name: 'Generic Player',
        team: 'Generic Team',
        fgper: '0%',
        ftper: '0%',
        ppg: '0',
      }
    }
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   if (this.state.playerImg != prevState.playerImg || this.state.teamLogo != prevState.teamLogo) {
  //     setTimeout(() => { return null; }, 4000);
  //   }
  //   return null;
  // }


  updatePlayerCard = (playerURL) => {
    const imgURL = 'https://nba-players.herokuapp.com/players/' + playerURL;
    const statsURL = 'https://nba-players.herokuapp.com/players-stats/' + playerURL;

    fetch(imgURL)
      .then(response => {
        const newImg = response.url;
        this.setState({playerImg: newImg});
      }).then(() => {
        fetch(statsURL)
          .then(res => {
          const statsJSON = res.json();
          return statsJSON;
        }).then(statsJSON => {
          const newTeamLogo = logos('./' + statsJSON.team_acronym +'.png'); 
          this.setState({
            teamLogo: newTeamLogo,
            stats: {
              name: statsJSON.name,
              team: statsJSON.team_name,
              fgper: statsJSON.field_goal_percentage + '%',
              ftper: statsJSON.free_throw_percentage + '%',
              ppg: statsJSON.points_per_game,
            },
          });
        })
      });
    }

  toggleSelected = (id, key) => {
    const temp = this.state[key];
    const active = this.state.activeId;
    temp[id].selected = !temp[id].selected;

    // temp[active] is the currently selected player in the dropdown
    if(active != null) {
      temp[active].selected = !temp[active].selected;
    }
    this.setState({
      [key]: temp,
      activeId: id,
      activePlayer: temp[id].name,
    });

    // temp[id].value is the player url
    console.log(temp[id].value);
    this.updatePlayerCard(temp[id].value);
    // this.getPlayerStats(temp[id].value);
  }

  // getPlayerStats = (playerURL) => {
  //   const statsURL = 'https://nba-players.herokuapp.com/players-stats/' + playerURL;

  //   fetch(statsURL)
  //     .then(response => {

  //       const statsJSON = response.json();
  //       return statsJSON;
  //     }).then(statsJSON => {
  //       this.setState({stats: {
  //         name: statsJSON.name,
  //         team: statsJSON.team_name,
  //         fgper: statsJSON.field_goal_percentage,
  //         ftper: statsJSON.free_throw_percentage,
  //         ppg: statsJSON.points_per_game,
  //       }})
  //     })
  // }

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
          team={this.state.activeTeam}
          stats={this.state.stats}/>
      </div>
    );
  }
}

export default HomepageBody;