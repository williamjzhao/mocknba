import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'

class Navbar extends Component {
  render() {
    return (
      <Nav />
    )
  }
}

const Nav = () => (
  <div>
    <IndexLink to='/'>Home</IndexLink>&nbsp;
    <IndexLink to='/teams'>Teams Page</IndexLink>&nbsp;
    <IndexLink to='/about'>About</IndexLink>&nbsp;
  </div>
)

export default Navbar;