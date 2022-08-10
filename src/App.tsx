import React, { useState } from 'react';
import logo from './logo.png';
import './App.scss';

function App() {

  interface User {
    email: string,
    password: string
  }

  // Test user to mock a successful login
  const testUser: User = {
    email: 'test@test.com',
    password: '123456'
  }

  // To display / hide error message
  const [loginError, setLoginError] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Set login state for the app. Show / hide elements in the dom or create protected routes
  const [loggedIn, setLoggedin] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // Mock login by comparing user credentials typed with testUser object. Display an alert if successful
  const mockLogin = () => {

    setLoggedin(false);

    let userCredentials: User = {
      email: email,
      password: password
    }

    // Handle succesful login attempt
    if (Object.entries(userCredentials).toString() === Object.entries(testUser).toString()) {
      setEmail('');
      setPassword('');
      setLoggedin(true);
      setLoginError(false);
      console.log('LoggedIn: ', loggedIn)
      alert('Welcome to your dashboard');
      return

      // Navigate to /dashboard with react router.
    }

    setLoginError(true);

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Login-container">
          <p className="Login-title">Welcome Back</p>
          <p className="Login-subtitle">Enter your credentials to access your account.</p>
          <div className="Login-form-container">
            <input type="email" id="name" name="name" className="Login-email-input" required placeholder="Enter your email" value={email} onChange={handleEmailChange}></input>
            <input type="password" id="name" name="name" className="Login-email-input" required placeholder="Enter your password" value={password} onChange={handlePasswordChange}></input>
            <button className="Login-email-button" onClick={mockLogin}>Sign In</button>
          </div>
          {loginError && <p className="Login-error">Email or password is incorrect.</p>}
        </div>
        <p className="Login-reset-text">Forgot your password? <a href="/reset" id="Login-reset-link">Reset Password</a></p>
      </header>
    </div>
  );
}

export default App;
