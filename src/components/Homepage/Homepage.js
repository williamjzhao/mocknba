import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import HomepageBody from './HomepageBody/HomepageBody';
import TeamButtons from './TeamButtons/TeamButtons';
import Teams from './Teams/Teams';
import Simulate from './Simulate/Simulate';
import classes from './Homepage.css';

class Homepage extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPlayer: '',
      team1:[],
      team2:[],
      teamOneStats: [0,0,0,0,0,0,0,0],
      teamTwoStats: [0,0,0,0,0,0,0,0],
      curStats: []
    }
  }

  currentPlayer = (player) => {
    this.setState({
      currentPlayer: player
    })
  }

  getStats = (stats) => {
    this.setState({
      curStats: stats
    })
  }

  addStats = (team, stats) => {
    if(team === '1'){
      let newStats = this.state.teamOneStats;
      let length = (this.state.team1).length;
      length = length > 1 ? length : 1;
      for(let i = 0; i < 8; ++i) {
        let temp = parseFloat(newStats[i] * (length - 1)) + parseFloat(stats[i]);
        newStats[i] = (temp / length).toFixed(2);
      }
      this.setState({
        teamOneStats: newStats
      })
    } else {
      let newStats = this.state.teamTwoStats;
      let length = (this.state.team2).length;
      length = length > 1 ? length : 1;
      for(let i = 0; i < 8; ++i) {
        let temp = parseFloat(newStats[i] * (length - 1)) + parseFloat(stats[i]);
        newStats[i] = (temp / length).toFixed(2);
      }
      this.setState({
        teamTwoStats: newStats
      })
    }
  }

  addPlayer = (team = '3') => {
    if(this.state.currentPlayer === '') {
      alert('No player has been selected');
    } else {
      if((this.state.team1).indexOf(this.state.currentPlayer) > -1 || (this.state.team2).indexOf(this.state.currentPlayer) > -1) {
        alert('Player has already been added');
      } else {
        if(team === '1') {
          let temp = this.state.team1;
          if(temp.length === 5) {
            alert("Team 1 has reached capacity");
          } else {
            temp.push(this.state.currentPlayer);
            this.setState({
              team1: temp
            })
          }
        } else {
          let temp = this.state.team2;
          if(temp.length === 5) {
            alert("Team 2 has reached capacity");
          } else {
            temp.push(this.state.currentPlayer);
            this.setState({
              team2: temp
            })
          }
        }
      }
    }
  }

  render() {
    return (
      <div className={classes.Homepage}>
        <Navbar />
        <HomepageBody 
          team='cle' 
          getCurrent={this.currentPlayer}
          getStats={this.getStats}
          curStats={this.state.curStats}/>
        <TeamButtons 
          selectTeam={this.addPlayer}
          addStats={this.addStats}
          curStats={this.state.curStats}/>
        <Teams 
          team1={this.state.team1}
          team2={this.state.team2}
          teamOneStats={this.state.teamOneStats}
          teamTwoStats={this.state.teamTwoStats}/>
        <Simulate 
          team1={this.state.teamOneStats}
          team2={this.state.teamTwoStats}/>
      </div>
    );
  }
}

export default Homepage;