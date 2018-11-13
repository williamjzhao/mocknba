import React, { Component } from 'react';
import CompareOption from './CompareOption/CompareOption';
import classes from './OptionsBar.css';
import { CSSTransition } from 'react-transition-group';

class OptionsBar extends Component { 
  state = {
    showTeams: false,
  }

  toggleTeams = () => {
    const showTeams = !this.state.showTeams;
    this.setState = {
      showTeams: showTeams,
    }

  }
  render() {
    return (
      <div className={classes.OptionsBar}>
        <CompareOption 
        click={this.toggleTeams} />
        <CSSTransition
              in={this.state.showTeams}
              timeout={300}
              classNames="teams"
              unmountOnExit
            >
        </CSSTransition>
      </div>
    );
  }
}

export default OptionsBar;