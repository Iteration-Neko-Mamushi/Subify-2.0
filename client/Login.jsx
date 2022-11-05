import React, { Component }from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

// import App from './App.jsx';
// import Signup from './Signup.jsx';

class Login extends Component {
  render () {
    return (
      <div>
        <form className='loginForm'>
          <input type="text" id="usernameInput" placeholder="username" value={null} />
          <input type="password" id="passwprdInput" placeholder="password" value={null}/>
          <button type='submit' id='loginbutton'>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;