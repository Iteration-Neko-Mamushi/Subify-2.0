// Import React and required hooks from React library
import React, { useState, /* useContext, */ useEffect } from 'react';

// Create a new context
const Context = React.createContext();

// Declare the ContextProvider and define state to manage and pass down through the Provider
function ContextProvider({children}) {

  const [ subscriptions, setSubscriptions ] = useState([{
    'subscription_name': '',
    'category': '',
    'monthly_price': ''
  }
  ]);

  // Make GET req and set/update State
  // useEffect hook allows for control over the frequency of DB request
  useEffect(() => {

    // Initiate update of summaryData and display states
    updateSummaryData();

  }, [subscriptions.length]); 
  // Included the length of display so we make a new req/re-render whenever state changes
  //---------------------------->> Can come back and redetermine need for this once Context is fully set up

  // Function to update summaryData and display states
  const updateSummaryData = () => {

    // Initiate GET request for current user's subscriptions
    fetch('/api/users') 
      .then((response) => response.json())
      .then((data) => {
        // Console logs to reflect success and show the data that was fetched
        console.log('\u001b[1;32mFetched new SummaryData from DB: ');
        console.group();
        console.log(data);
        console.groupEnd();

        // Iterate through the returned data and, for each subscription, update the totalMonthlyPrice of subscriptions as well as the subscriptionCount
        // Update display state with this data
        setSubscriptions(data);

        // Update summaryData state with the newly updated summaryData
        console.log(subscriptions);
      });
  };

  return (
    // Pass display and summaryData states to all children of the Context Provider
    <Context.Provider value={{subscriptions, setSubscriptions}} >
      {children}
    </Context.Provider>
  );
  
}

export {ContextProvider, Context};
