import React from 'react';

export default function displayBox(props) {

  const { subscription_name, category, monthly_price } = props; // destructuring the props object so we can just use the prop names to render
  // changed attribute names to match exactly with what we have state set with, and how we have it labeled in the backend
  return (
    <div className="displayBox">
      <p className="ServiceDetail"> <strong>ServiceName:</strong> {subscription_name}</p> 
      <p className="ServiceDetail"> <strong>Category:</strong> {category}</p>
      <p className="ServiceDetail"> <strong>Monthly Price:</strong> {monthly_price}</p>
      <p className="ServiceDetail"> <strong>Yearly Charge:</strong> {monthly_price * 12}</p>
    </div>
  );
}