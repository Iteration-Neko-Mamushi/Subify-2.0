import React from 'react';
import AddSub from './components/AddSub.jsx';
import Welcome from './components/Welcome.jsx';
import Summary from './components/Summary.jsx';
import CardContainer from './components/CardContainer.jsx';

export default function Home() {
  return (
    <div id='mainContainer'>
      <Welcome />
      <div id='midContainer'>
        <AddSub />
        <Summary />
      </div>
      <CardContainer />
    </div>
  );
}
