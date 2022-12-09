import React, { useContext } from 'react';
import deleteIcon from '../assets/delete.png';
import { Context } from '../Context.js';

export default function SubscriptionCard(props) {

  // Destructuring variables for this particular subscription card from props
  const { subscription_name, category, monthly_price } = props;

  const { handleDelete } = useContext(Context);
  

  return (
    <div className="displayBox">
      <div className="displayBox-inner">
        <div className="displayBox-front">
          <p className="ServiceDetail-Front"><strong>Service: </strong>{subscription_name}</p>
          <p className="ServiceDetail-Front"><strong>Monthly Price: </strong>${monthly_price}</p>
        </div>
        <div className="displayBox-back">
          <p className="ServiceDetail"> <strong>Service Name:</strong> {subscription_name}</p>
          <p className="ServiceDetail"> <strong>Category:</strong> {category}</p>
          <p className="ServiceDetail"> <strong>Yearly Charge:</strong> ${(monthly_price * 12).toFixed(2)}</p>
          <img className="deleteIcon" id={subscription_name} src={deleteIcon} onClick={(e) => handleDelete(e)} />
        </div>
      </div>
    </div>
  );
}
