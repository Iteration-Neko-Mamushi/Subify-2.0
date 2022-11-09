import React, { useContext, useEffect } from 'react';
import { Context } from '../Context';

export default function SummaryCard() {

  // Destructure state variables from Context API
  const { subscriptions, setSubscriptions } = useContext(Context);

  /*
    Example subscription:
    {
      subscription_name:
      category:
      subscription_price:
    }
  */

  
  // Calculate subscriptionCount, totalMonthlyPrice, and totalYearlyPrice from subscriptions array
  const totalMonthlyPrice = subscriptions.reduce((total, sub) => {
    return total + Number(sub.subscription_price);
  }, 0);


  return (
    <div className="displayBox-summ">
      <h2>Expense Summary</h2>
      <div id="numberofservices">
        <strong>Number of Services:</strong> {subscriptions.length}
      </div>
      <div id='totalmonthlycost'>
        <strong>Total Monthly Cost:</strong> {(totalMonthlyPrice).toFixed(2)}
      </div>
      <div id='totalyearlycost'>
        <strong>Total Yearly Cost:</strong> {(totalMonthlyPrice * 12).toFixed(2)}
      </div>
    </div>
  );
}