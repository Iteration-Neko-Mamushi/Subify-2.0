import React, {useEffect, useState} from 'react';
import DisplayBox from './displayBox.jsx';

export default function SubCard() {
  
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => {
        console.log('DATA:', data);
        setDisplay(data.map((sub, i) => { // refactored to using map method 
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
  }, [display.length]);

  console.log('display', display);
  return (
    <div className='displayContainer'>
      {display}
    </div>
  );
}