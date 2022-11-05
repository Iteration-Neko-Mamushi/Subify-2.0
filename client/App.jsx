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

class App extends Component {
  render() {
    return (
      <Router>
        <h1>APP</h1>
        <CardContainer />
        <Routes>
          <Route path='/signup' caseSensitive={false} element={<Signup />} />
          <Route path='/login' caseSensitive={false} element={<Login />} />
        </Routes>
      </Router >
    );
  }
}

export default App;