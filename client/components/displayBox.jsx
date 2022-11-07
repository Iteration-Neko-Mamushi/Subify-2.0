import React from 'react';

export default function displayBox(props) {

  const { subscription_name, category, monthly_price } = props; // destructuring the props object so we can just use the prop names to render
  // changed attribute names to match exactly with what we have state set with, and how we have it labeled in the backend
  return (
    <div className="displayBox">
      <p className="ServiceDetail"> ServiceName: {subscription_name}</p> 
      <p className="ServiceDetail"> Category: {category}</p>
      <p className="ServiceDetail"> Monthly Price: {monthly_price}</p>
      <p className="ServiceDetail"> Yearly Charge: {monthly_price * 12}</p>
    </div>
  );
}