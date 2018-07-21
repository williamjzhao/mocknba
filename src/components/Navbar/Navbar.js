import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import classes from './Navbar.css';

const Navbar = (props) => (
  <div className={classes.NavBar}>
    <IndexLink to='/'>Home</IndexLink>&nbsp;
    <IndexLink to='/teams'>TeamsPage</IndexLink>&nbsp;
    <IndexLink to='/about'>About</IndexLink>&nbsp;
  </div>
)

export default Navbar;