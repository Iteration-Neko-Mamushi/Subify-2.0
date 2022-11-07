import React, { useState, useEffect } from 'react';
import DisplayBox from './displayBox.jsx';
import SummaryCard from './SummaryCard.jsx';


export default function Summary(props) {
 
  const {display, setDisplay} = props;

  const [display1, setDisplay1] = useState([])

  useEffect(() => { 
    fetch('/api/users')
      .then(res => {
        res.json();
        console.log('res json:', res)
      })
      .then(data => {

        console.log('use effect ran DATA:', data);
        
        // setDisplay(old => data)

        // totalCost = data.monthly_price.reduce( (a, b) => {
        //   return a + b
        //   }, 0);

          
      
       setDislay1(data.map((sub, i) => { // refactored to use map method 
          
          return (
            <SummaryCard 
              id='summary' 
              key={i} 
              totalSubs={display1.length} 
              yearly_price={sub.subscription_price * 12} 
              monthly_price= {sub.subscription_price}
              // totalCost={  totalCost}
              />);
            }));
          });
      }, [display.length]);
  
  return (
    <div>
      {display1}
    </div>
    
  );
}
