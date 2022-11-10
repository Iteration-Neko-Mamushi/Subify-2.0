import React, { useContext, useEffect } from 'react';
import { Context } from '../Context';

export default function SummaryCard() {

  // Destructure state variables from Context API
  const { subscriptions, setSubscriptions } = useContext(Context);

  // Calculate subscriptionCount, totalMonthlyPrice, and totalYearlyPrice from subscriptions array using the reduce method
  const totalMonthlyPrice = subscriptions.reduce((total, sub) => {
    return total + Number(sub.subscription_price);
  }, 0);


  return (
    <div className='summary-container'>
      <div className="displayBox-summ">
        <h2>Expense Summary</h2>
        <div id="numberofservices" className='totalSumField'>
          <strong>Number of Services:</strong><div className='total'>{subscriptions.length}</div>
        </div>
        <div id='totalmonthlycost' className='totalSumField'>
          <strong>Total Monthly Cost:</strong><div className='total'>${(totalMonthlyPrice).toFixed(2)}</div>
        </div>
        <div id='totalyearlycost' className='totalSumField'>
          <strong>Total Yearly Cost:</strong><div className='total'>${(totalMonthlyPrice * 12).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}