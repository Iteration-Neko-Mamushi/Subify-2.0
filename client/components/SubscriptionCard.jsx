import React from 'react';
import deleteIcon from '../assets/delete.png';

export default function SubscriptionCard(props) {

  // Destructuring variables for this particular subscription card from props
  const { subscription_name, category, monthly_price } = props;

  return (
    <div className="displayBox">
      <div className="displayBox-inner">
        <div className="displayBox-front">
          <p className="ServiceDetail-Front"><strong>Service: </strong>{subscription_name}</p>
          <p className="ServiceDetail-Front"><strong>Monthly Price: </strong>${monthly_price}</p>
        </div>
        <div className="displayBox-back"> 
          <img src={deleteIcon} className="deleteIcon" />     
          <p className="ServiceDetail"> <strong>Service Name: </strong>{subscription_name}</p> 
          <p className="ServiceDetail"> <strong>Category: </strong>{category}</p>
          <p className="ServiceDetail"> <strong>Yearly Charge: </strong>${monthly_price * 12}</p>
        </div>
      </div>
    </div>
  );
}