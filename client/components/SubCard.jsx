import React from 'react';
import DisplayBox from './displayBox.jsx';

export default function SubCard() {

  const display = [];// moved display var outside into gobal scope from inside the fetch request

  fetch('')
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        display.push(
          <DisplayBox
            key={`card${i}`}
            id={`card${i}`}
            serviceName={data[i].name}
            category={data[i].category}
            monthlyPrice={data[i]._price}
          />
        );
      }
    });
  return (
    <div className='displayContainer'>
      {display}
    </div>
  );
}