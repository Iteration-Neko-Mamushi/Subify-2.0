import React, {useEffect, useState, useContext } from 'react';
import SubscriptionCard from './SubscriptionCard.jsx';
import {Context} from '../Context';

export default function Subscription() {

  // Destructured "props" pulled from the Context API
  const { subscriptions, setSubscriptions } = useContext(Context);

  console.log('DISPLAY', subscriptions);

  const displayCards = subscriptions.map((sub, i)=> {
    return (
      <SubscriptionCard
        key={`card${i}`}
        id={`card${i}`}
        // Below attributes match the keys in the subscriptions array as well as the DB
        subscription_name={sub.subscription_name} 
        category={sub.category}
        monthly_price={sub.subscription_price}
      />
    );
  });
  
  return (
    <div className='displayContainer'>
      {displayCards}
    </div>
  );
}