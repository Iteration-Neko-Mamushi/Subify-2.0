import React, {useEffect, useState, useContext } from 'react';// import useContext hook from the React library
import SubscriptionCard from './SubscriptionCard.jsx';
import {Context} from '../Context';// import Context from the Context API

export default function Subscription() {

  // Destructured "props" pulled from the Context API
  const { subscriptions, setSubscriptions } = useContext(Context);// invoke the useContext hook passing in the Context
  // now we have access to the state variables that are being managed in the Context API

  console.log('DISPLAY', subscriptions);

  const displayCards = subscriptions.map((sub, i)=> {// we take in the passed down state and map over it to create a component for each obj in the array
    return (
      <SubscriptionCard
        key={`card${i}`}// dynamically render a unique key using interpolation and the index
        id={`card${i}`}// anohter way to do this would be to installing & importing in something like nanoid to create an even more unique ID for each component
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