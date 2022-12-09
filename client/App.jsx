import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Home from './Home.jsx';
import Styles from './view/style.scss';

// Moved BrowserRouter to index.js 
class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path='/' caseSensitive={false} element={<Login />} />
        <Route path='/signup' caseSensitive={false} element={<Signup />} />
        <Route path='/home' caseSensitive={false} element={<Home />} />
      </Routes>
    );
  }
}

export default App;