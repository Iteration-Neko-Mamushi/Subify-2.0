import React, { useState } from 'react';
import AddSub from './components/AddSub.jsx';
import Welcome from './components/Welcome.jsx';
import Summary from './components/Summary.jsx';
import SummaryCard from './components/SummaryCard.jsx';
import CardContainer from './components/CardContainer.jsx';
import SubCard from './components/SubCard.jsx';

export default function Home() {
  const [display, setDisplay] = useState([]);
  const [summaryData, setSummaryData] = useState({
    subscriptionCount: 0,
    totalMonthlyPrice: 0
  })

  return (
    <div id='mainContainer'>
        <Welcome />
        <div id='midContainer'>
        <AddSub display={display} setDisplay={setDisplay} />

        <div className="all-cards">
          <SummaryCard summaryData={summaryData}/>
          {/* <Summary display={display} setDisplay={setDisplay} /> */}
          
          {/* <CardContainer /> Why was this needed? unsure about purpose*/}
        <SubCard display={display} setDisplay={setDisplay} summaryData={summaryData} setSummaryData={setSummaryData}/>
        </div>
        </div>
    </div>
  );
}
