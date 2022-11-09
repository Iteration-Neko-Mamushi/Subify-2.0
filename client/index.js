import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom'; // moved Brouter to index.js
import { ContextProvider } from './Context.js'; // importing ContextProvider from Context.js

ReactDOM.render(
  // Moved ContextProvider and Router wrappers into index.js for clarity
  // Context should be propagated down to all child components, regardless of degree of nesting
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>, 
  document.getElementById('root'));