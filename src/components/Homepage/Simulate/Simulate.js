import React, { Component } from 'react';
import classes from './Simulate.css';

class Simulate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            winner: 'Undecided'
        }
    }
    calculate = () => {
        let score1 = this.props.team1.reduce((total,number) => {
            return parseFloat(total) + parseFloat(number);
        });
        let score2 = this.props.team2.reduce((total,number) => {
            return parseFloat(total) + parseFloat(number);
        });
        score1 = (score1/8).toFixed(0);
        score2 = (score2/8).toFixed(0);

        const rando = (Math.random() * 100).toFixed(0);
        let temp = 'Undecided';
        if(score1 !== 0 && score2 !== 0) {
            if(rando >= 25){
                temp = score1 > score2 ? "Team 1 Wins" : "Team 2 Wins";
            } else{
                temp = score1 < score2 ? "Team 1 Wins" : "Team 2 Wins";
            }
        }
        this.setState({
            winner: temp
        })
    }

    render() {
        return(
            <div className={classes.container}>
                <div className={classes.Simulate} onClick={this.calculate}>
                    {this.state.winner}
                </div>
            </div>
        )
    };
}

export default Simulate;