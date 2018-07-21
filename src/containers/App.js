import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Homepage from '../components/Homepage/Homepage';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import TeamsPage from '../components/TeamsPage/TeamsPage';
import AboutPage from '../components/AboutPage/AboutPage';

class App extends Component {
  render() {
    return (
      <nav>
        <Router history={hashHistory}>
          <Route path='/' component={Container}>
            <IndexRoute component={Homepage} />
            <Route path='/teams' component={TeamsPage}>
            </Route>
            <Route path='/about' component={AboutPage} />
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      </nav>
    )
  }
}

const Nav = () => (
  <div>
    <IndexLink to='/'>Home</IndexLink>&nbsp;
    <IndexLink to='/teams'>TeamsPage</IndexLink>&nbsp;
    <IndexLink to='/about'>About</IndexLink>&nbsp;
  </div>
)

const Container = (props) => <div>
  {props.children}
</div>

const NotFound = () => <h1>404.. This page is not found!</h1>
export default App
