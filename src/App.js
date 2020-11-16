import React from 'react'
import {BrowserRouter as Switch, Route, Redirect } from 'react-router-dom'
import Welcome from './components/Welcome'
import Profile from './components/Profile'
import Game from './components/Game'
import Congratulations from './components/Congratulations'
import Records from './components/Records'
import NotFoundPage from './components/NotFoundPage'

import './App.css'

export default class App extends React.Component {
  constructor(){
    super()

    this.state = {}
  }

  render() {
    return(
      <div>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome" component={Welcome} />
          <Route path="/profile" component={Profile} />
          <Route path="/game" component={Game} />
          <Route path="/congratulation" component={Congratulations} /> 
          <Route path="/records" component={Records} />
          <Route path="/notFoundPage" component={NotFoundPage} />
        
        </Switch>
      </div>
    );
  }
}