import React from 'react';

export default function displayBox(props) {

  const { serviceName, category, monthlyPrice } = props; // destructuring the props object so we can just use the prop names to render

  return (
    <div className="displayBox">
      <p className="ServiceDetail"> ServiceName: {serviceName}</p>
      <p className="ServiceDetail"> Category: {category}</p>
      <p className="ServiceDetail"> Monthly Price: {monthlyPrice}</p>
      <p className="ServiceDetail"> Yearly Charge: {monthlyPrice * 12}</p>
    </div>
  );
}