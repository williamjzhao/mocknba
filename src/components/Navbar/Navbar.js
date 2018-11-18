import React from 'react';
import { IndexLink } from 'react-router'
import classes from './Navbar.css';

const Navbar = (props) => (
  <div className={classes.NavBar}>
    <IndexLink style={{ textDecoration: 'none' }} to='/'>Home</IndexLink>&nbsp;
    <a style={{ textDecoration: 'none' }} href='//www.github.com/williamjzhao'>Github</a>&nbsp;
  </div>
)

export default Navbar;