import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import DisplayBox from './displayBox.jsx';

export default function SubCard(props) {
  const {display, setDisplay} = props; //Props from parent Home.jsx to manage display and when to refresh

  console.log('DISPLAY', display);

  useEffect(() => { // using useEffect hook here to control freq of req
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => {
        console.log('use effect ran DATA:', data);
        setDisplay(data.map((sub, i) => { // refactored to use map method 
          return(
            <DisplayBox
              key={`card${i}`}
              id={`card${i}`}
              subscription_name={sub.subscription_name} // changed attribute names to match exactly with what we have state set with, and how we have it labeled in the backend
              category={sub.category}
              monthly_price={sub.subscription_price}
            />);
        }));
      });
  }, [display.length]);// included the length of display so we make a new req/ new render whenever state changes
  // console.log('display', display);
  return (
    <div className='displayContainer'>
      {display}
    </div>
  );
}