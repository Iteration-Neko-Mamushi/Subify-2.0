import React, { useState } from 'react';
import AddSub from './components/AddSub.jsx';
import Welcome from './components/Welcome.jsx';
import SummaryCard from './components/SummaryCard.jsx';
import Subscription from './components/Subscription.jsx';

export default function Home() { // we are no longer cluttering this component with empty 'placeholder'... 
  // ...state variables and passing them down as props only to be defined separately in those respective components.
  // We are now storing all necessary state inside of our Context API and passing it down on a per needed basis
  // without having to prop drill through components that don't need them. This is possible because we 
  // wrapped the App component in our index.js with our ContextProvider 

  return (
    <div id='mainContainer'>
      <Welcome />
      <div id='midContainer'>
        <AddSub />
        <div className="all-cards">
          <SummaryCard />
          <Subscription />
        </div>
      </div>
    </div>
  );
}
