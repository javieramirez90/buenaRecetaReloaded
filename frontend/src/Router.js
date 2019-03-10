import React from 'react'
import { Switch, Route } from 'react-router-dom'
import WrappedNormalLoginForm from './components/auth/Login';
import WrappedNormalSignupForm from './components/auth/Signup';
import Home from './components/layout/Home';
import Profile from './components/auth/Profile';

export default (props) =>{

  let { catched } = props
  let { user } = props

return(
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" render={(props) => <WrappedNormalLoginForm catched={catched}  {...props}  />} />
    <Route path="/signup" component={WrappedNormalSignupForm} />
    <Route path="/profile" render={(props) => <Profile  user = {user} {...props} />} />
  </Switch>
)
  }