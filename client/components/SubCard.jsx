import React from 'react';
import DisplayBox from './displayBox.jsx'

fetch('')
  .then((response) => response.json())
  .then((data) => {
    const display = [];
    for (let i = 0; i < data.length; i++) {
      display.push(
        <DisplayBox
          key={`card${i}`}
          id={`card${i}`}
          serviceName={data[i].name}
          category={data[i].category}
          monthlyPrice={data[i]._price}
        />
      )
    }
  });


export default function SubCard() {


  return (
    <div className='displayContainer'>
      {display}
    </div>
  );
}
