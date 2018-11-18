import React from 'react';
import classes from './Teams.css';

const teams = (props) => {
    let team1 = props.team1;
    let team2 = props.team2;
    let teamOneStats = props.teamOneStats;
    let teamTwoStats = props.teamTwoStats;
    return(
        <div className={classes.Teams}>
            <div className={classes.teamOne}>
                <strong>Team 1</strong>
                {Object.entries(team1).map(([key,name]) => (
                    <div key={name}>
                        <strong>{name}</strong>
                    </div>
                ))}
            </div>
            <div className={classes.teamStats}>
                <strong>Team 1 Stats</strong>
                {Object.entries(teamOneStats).map(([key,name]) => (
                    <span key={key}>
                        {name}
                    </span>
                ))}
            </div>
            <div className={classes.middle}>
                <strong>Categories</strong>
                <span>Field Goal%</span>
                <span>Free Throw%</span>
                <span>3 Point%</span>
                <span>Points</span>
                <span>Assists</span>
                <span>Rebounds</span>
                <span>Steals</span>
                <span>Turnovers</span>
            </div>
            <div className={classes.teamStats}>
                <strong>Team 2 Stats</strong>
                {Object.entries(teamTwoStats).map(([key,name]) => (
                    <span key={key}>
                        {name}
                    </span>
                ))}
            </div>
            <div className={classes.teamTwo}>
                <strong>Team 2</strong>
                {Object.entries(team2).map(([key, name]) => (
                    <div key={name}>
                        <strong>{name}</strong>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default teams;