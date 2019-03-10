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
    console.log("es aquí donde hago magia")

  }

  render() {
    return (
      <div className="App">
        <Navbar /> 
        <div className="Env">
        <Router catched={this.catchForGlobalState}/>
        {/* <video autoPlay loop className="video-background" muted playsInline src="https://res.cloudinary.com/dtciysqlf/video/upload/v1552173217/buenaReceta/BuenaRecetaVideo.mp4"></video> */}
        </div>
        <Foooter />
      </div>
    );
  }
}

export default App;
