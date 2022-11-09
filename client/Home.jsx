import React, { useState } from 'react';
import AddSub from './components/AddSub.jsx';
import Welcome from './components/Welcome.jsx';
import SummaryCard from './components/SummaryCard.jsx';
import Subscription from './components/Subscription.jsx';

export default function Home() {

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
