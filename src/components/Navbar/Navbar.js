import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import classes from './Navbar.css';

const Navbar = (props) => (
  <div className={classes.NavBar}>
    <IndexLink style={{ textDecoration: 'none' }} to='/'>Home</IndexLink>&nbsp;
    <IndexLink style={{ textDecoration: 'none' }} to='/teams'>Teams</IndexLink>&nbsp;
    <IndexLink style={{ textDecoration: 'none' }} to='/about'>About</IndexLink>&nbsp;
    <IndexLink style={{ textDecoration: 'none' }} to='/github'>Github</IndexLink>&nbsp;
  </div>
)

export default Navbar;