import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Foooter from './components/layout/Footer';
// import WrappedNormalLoginForm from './components/auth/Login';
// import WrappedNormalSignupForm from './components/auth/Signup';
import Router from './Router';

class App extends Component {

  state={
    user: {},
    logged: false
  }

  componentDidUpdate() {
    
  }

  catchForGlobalState = (res) => {
    let { user } = res.data
    this.setState({user, logged: true})
  }

  render() {
    let { user } = this.state
    let { logged } = this.state
    return (
      <div className="App">
        <Navbar isLogged={logged}/> 
        <div className="Env">
        <Router user={ user } catched={this.catchForGlobalState}/>
        {/* <video autoPlay loop className="video-background" muted playsInline src="https://res.cloudinary.com/dtciysqlf/video/upload/v1552173217/buenaReceta/BuenaRecetaVideo.mp4"></video> */}
        </div>
        <Foooter />
      </div>
    );
  }
}

export default App;
