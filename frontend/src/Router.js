import React from 'react'
import { Switch, Route } from 'react-router-dom'
import WrappedNormalLoginForm from './components/auth/Login';
import WrappedNormalSignupForm from './components/auth/Signup';

export default (props) =>{

  let {catched} = props

return(
  <Switch>
    <Route path="/login" render={(props) => <WrappedNormalLoginForm catched={catched}  {...props}  />} />
    <Route path="/signup" component={WrappedNormalSignupForm} />
  </Switch>
)
  }