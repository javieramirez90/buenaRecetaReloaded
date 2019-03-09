import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Foooter from './components/layout/Footer';
// import WrappedNormalLoginForm from './components/auth/Login';
// import WrappedNormalSignupForm from './components/auth/Signup';
import Router from './Router';

class App extends Component {

  state={
    user: {}
  }

  catchForGlobalState = (data) => {
    this.setState({user: data.user})

  }

  render() {
    return (
      <div className="App">
        <Navbar /> 
        <div className="Env">
        <Router catched={this.catchForGlobalState}/>
        </div>
        <Foooter />
      </div>
    );
  }
}

export default App;
