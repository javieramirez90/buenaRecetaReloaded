import React from 'react'
import { Switch, Route } from 'react-router-dom'
import WrappedNormalLoginForm from './components/auth/Login';
import WrappedNormalSignupForm from './components/auth/Signup';
import Home from './components/layout/Home';

export default (props) =>{

  let {catched} = props

return(
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" render={(props) => <WrappedNormalLoginForm catched={catched}  {...props}  />} />
    <Route path="/signup" component={WrappedNormalSignupForm} />
  </Switch>
)
  }