import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Login from './Login.jsx';
import Signup from './Signup.jsx';
import CardContainer from './components/CardContainer.jsx';
import Welcome from './components/Welcome.jsx';
import Summary from './components/Summary.jsx';
import Home from './Home.jsx';
import style from './view/style.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes> 
          <Route exact path='/' caseSensitive={false} element={<Home />} />
          <Route path='/signup' caseSensitive={false} element={<Signup />} />
          <Route path='/login' caseSensitive={false} element={<Login />} />
        </Routes>
      </Router >
    );
  }
}

export default App;