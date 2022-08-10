import React from 'react';
import logo from './logo.png';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Login-container">
          <p className="Login-title">Welcome Back</p>
          <p className="Login-subtitle">Enter your credentials to access your account.</p>
          <div className="Login-form-container">
            <form>
            <input type="email" id="name" name="name" className="Login-email-input" required placeholder="Enter your email"></input>
            <input type="password" id="name" name="name" className="Login-email-input" required placeholder="Enter your password"></input>
            <button className="Login-email-button" type="submit">Sign In</button>
            </form>
          </div>
          {/* <p className="Login-error">Email or password is incorrect.</p> */}
        </div>
        <p className="Login-reset-text">Forgot your password? <a href="/reset" id="Login-reset-link">Reset Password</a></p>
      </header>
    </div>
  );
}

export default App;
