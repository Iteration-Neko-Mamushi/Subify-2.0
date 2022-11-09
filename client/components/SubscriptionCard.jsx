import React from 'react';

export default function SubscriptionCard(props) {

  // Destructuring variables for this particular subscription card from props
  const { subscription_name, category, monthly_price } = props;

  return (
    <div className="displayBox">
      <p className="ServiceDetail"> <strong>ServiceName:</strong> {subscription_name}</p> 
      <p className="ServiceDetail"> <strong>Category:</strong> {category}</p>
      <p className="ServiceDetail"> <strong>Monthly Price:</strong> {monthly_price}</p>
      <p className="ServiceDetail"> <strong>Yearly Charge:</strong> {monthly_price * 12}</p>
    </div>
  );
}