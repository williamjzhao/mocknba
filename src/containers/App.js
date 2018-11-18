import React, { Component } from 'react';
import Homepage from '../components/Homepage/Homepage';
import { Router, Route, IndexRoute, hashHistory} from 'react-router'

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/'>
          <IndexRoute component={Homepage} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    );
  }
}

const NotFound = () => <h1>404.. This page is not found!</h1>
export default App;
