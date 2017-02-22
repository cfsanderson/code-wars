import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Layout from './Layout'
import Home from './Home'
import HackerRank from './HackerRank'
import CodeWars from './CodeWars'

class App extends Component {

  render () {
    return (
      <Router history={browserHistory}>
        <Route component={Layout}>
          <Route path='/' component={Home} />
          <Route path='/HackerRank' component={HackerRank}>
            {/* <Route path=':slug' component={MenuSection} /> */}
          </Route>
          <Route path='/CodeWars' component={CodeWars} />
        </Route>
      </Router>
    )
  }
}

export default App
