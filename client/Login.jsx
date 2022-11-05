import React, { Component }from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import App from './App.jsx';
import Signup from './Signup.jsx';

class Login extends Component {
  render () {
    return (
      <h1>Login</h1>
    );
  }
}

export default Login;