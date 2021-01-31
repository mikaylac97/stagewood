import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

// import Login from './components/Auth/Login'
// import Signup from './components/Auth/Signup'
import Landing from './components/Landing'
import Profile from './components/Profile'
import ProtectedRoute from './components/ProtectedRoute'


export default class App extends Component {
  
  state = {

  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={props => <Landing />}/>
            <ProtectedRoute 
              path='/profile'
              redirect='/error'
              render={props => <Profile />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

