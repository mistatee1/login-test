import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Login-container">
          <p className="Login-title">Welcome Back</p>
          <p className="Login-subtitle">Enter your credentials to access your account.</p>
          <div className="Login-form-container">
            <input type="text" id="name" name="name" className="Login-email-input" required placeholder="Enter your email"></input>
            <input type="text" id="name" name="name" className="Login-email-input" required placeholder="Enter your password"></input>
            <button className="Login-email-button">Sign In</button>
          </div>
        </div>
        <p className="Login-reset-text">Forgot your password? <a href="#" id="Login-reset-link">Reset Password</a></p>
      </header>
    </div>
  );
}

export default App;
