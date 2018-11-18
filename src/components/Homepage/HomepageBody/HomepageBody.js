import React, { Component } from 'react';
import PlayerDisplay from './PlayerDisplay/PlayerDisplay';
import classes from './HomepageBody.css';
import playerimage from '../../../assets/generic.png';
import teamlogo from '../../../assets/nbalogo.png';
import SearchBar from './SearchBar/SearchBar';

const logos = require.context('../../../assets/logos',true);

class HomepageBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerImg: playerimage,
      teamLogo: teamlogo,
      activePlayer: 'Generic Player',
      activeId: null,
      stats: {
        Name: 'Generic Player',
        Team: 'Generic Team',
        'Field Goal Percentage': '0%',
        'Free Throw Percentage': '0%',
        '3 Point Percentage': '0%',
        'Points Per Game': '0',
        'Assists Per Game': '0',
        'Rebounds Per Game': '0',
        'Steals Per Game': '0',
        'Turnovers Per Game': '0'
      },
    }

    // this.updatePlayerCard = this.updatePlayerCard.bind(this)
    // this.newToggle = this.newToggle.bind(this)

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
              Name: statsJSON.name,
              Team: statsJSON.team_name,
              'Field Goals Percentage': statsJSON.field_goal_percentage + '%',
              'Free Throw Percentage': statsJSON.free_throw_percentage + '%',
              '3 Point Percentage': statsJSON.three_point_percentage + '%',
              'Points Per Game': statsJSON.points_per_game,
              'Assists Per Game': statsJSON.assists_per_game,
              'Rebounds Per Game': statsJSON.rebounds_per_game,
              'Steals Per Game': statsJSON.steals_per_game,
              'Turnovers Per Game': statsJSON.turnovers_per_game
            },
          });
          const values = [statsJSON.field_goal_percentage, statsJSON.free_throw_percentage,
            statsJSON.three_point_percentage, statsJSON.points_per_game, statsJSON.assists_per_game, 
            statsJSON.rebounds_per_game, statsJSON.steals_per_game, statsJSON.turnovers_per_game];
          return values;
        }).then((values) => {
          this.props.getStats(values);
        })
      });
    }

  newToggle = (playerData) => {
    // temp[active] is the currently selected player in the dropdown
    this.setState({
      activePlayer: playerData["name"]
    })
    this.props.getCurrent(playerData["name"]);
    this.updatePlayerCard(playerData["api"]);

    /*        <PlayerSelector
          title={this.state.activePlayer} 
          list={this.state.playersList}
          toggleItem={this.toggleSelected}/>
    */


    // playerData["api"] should be the playerURL now
  }

  render() {
    return (
      <div className={classes.HomepageBody}>
        <SearchBar
          update={this.newToggle}/>
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