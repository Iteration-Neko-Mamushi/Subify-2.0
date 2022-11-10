// Import React and required hooks from React library
import React, { useState, /* useContext, */ useEffect } from 'react';

// Create a new context
const Context = React.createContext();

// Declare the ContextProvider and define state to manage and pass down through the Provider
function ContextProvider({children}) {

  const [ subscriptions, setSubscriptions ] = useState([{ // refactored state to be a single object representing state
    'subscription_name': '',
    'category': '',
    'monthly_price': ''
  }]);

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
    fetch('/api/users') // GET request is the default so need to include the method
      .then((response) => response.json())// json parse the returned promise
      .then((data) => {// take the data and do the following...

        // Console logs to reflect success and show the data that was fetched
        console.log('\u001b[1;32mFetched new SummaryData from DB: ');
        console.group();
        console.log(data);
        console.groupEnd();

        // Update state with the fetched data
        setSubscriptions(data);
        console.log(subscriptions);
      });
  };

  return (
    // Pass display and summaryData states to all children of the Context Provider
    // the value attribute here is what allows us to pass down state via props to any child components that are wrapped
    // around the App component by tge ContextProvider in index.js
    <Context.Provider value={{subscriptions, setSubscriptions}} >
      {children}
    </Context.Provider>
  );
}

export {ContextProvider, Context};// export as named exports bc we need both
