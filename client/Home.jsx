import React, { useState } from 'react';
import AddSub from './components/AddSub.jsx';
import Welcome from './components/Welcome.jsx';
import Summary from './components/Summary.jsx';
import CardContainer from './components/CardContainer.jsx';
import SubCard from './components/SubCard.jsx';

export default function Home() {
  const [display, setDisplay] = useState([]);

  // return (
  //   <div id='mainContainer'>
  //     <SubCard display={display} setDisplay={setDisplay}/>
  //   </div>
  // );

  return (
    <div id='mainContainer'>
      <Welcome />
      <div id='midContainer'>
        <AddSub display={display} setDisplay={setDisplay}/>
        <Summary />
      </div>
      {/* <CardContainer /> Why was this needed? unsure about purpose*/}
      <SubCard display={display} setDisplay={setDisplay}/>
    </div>
  );
}
