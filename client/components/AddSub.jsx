import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Context } from '../Context.js';
import { useNavigate } from 'react-router-dom';

export default function AddSub(props) {
  
  const navigate = useNavigate('/');

  // Destructure state variables from Context API
  const {subscriptions, setSubscriptions} = useContext(Context);

  // completely refactored this form component to be a controlled component
  // consolidated all state variables inside of one state object
  const [formData, setFormData] = useState({
    subscription_name: '',
    monthly_price: '',
    // Assigning default values to the following properties
    category: 'other',
    due_date: 'PLACEHOLDER'
  });

  function handleChange(e) {// created a handleChnage function to manage state change inside this component
    const { name, value } = e.target;// destructuring the name and value from the event obj

    setFormData(oldData => {// setting state to reflect each key stroke which is causing state change
      return (
        {
          ...oldData, // we want to spread in the old state obj
          [name]: value// than overwrite the value of the property where the state chnage is occurring
        }
      );
    });
    console.log('formData', formData);
  }

  const handleSubmit = (e) => {//refactored handleSubmit functionality to reflect our refactored code
    e.preventDefault();

    // Save data and relay to the backend via a PATCH request    
    const body = formData;
    const url = '/api/users';

    fetch(url, {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'Application/JSON' 
      },
      body: JSON.stringify(body)// passing in the state obj instead of the individual state properties
    })
      .then(res => {
        res.json();
      })
      .then(data => {

        console.log('Data:',  data);

        setFormData(old => {// we reset state to its default state so the next user can start with a clean slate, aka clear input fields
          return (
            { 
              subscription_name: '',
              monthly_price: '',
              // Default values for the following properties
              category: 'other',
              due_date: 'PLACEHOLDER' 
            }
          );
        });
        //update display of the user's subscriptions
        location.reload();
      })
      .catch((err) => {
        console.log('Error:', err);
      }); 
  };
  // the comments below apply to all input tags below
  return (
    <div id="addSubForm-container">
      <form className='addSubForm' onSubmit={handleSubmit}>
        <span>Service </span>
        <input
          type="text"
          id="serviceNameInput"
          placeholder="Service"
          onChange={handleChange} // as part of the refactor, we defined and assigned new functionality to handle the onChange event
          // Not absolutely necessary -- will work without, but just best practice -- Reason: allows React to remain in control of state
          // Added formData in front of subscription_name
          value={formData.subscription_name} // we are reassigning the value of each input so that we can transform this into a controlled component, where we are putting React in charge of determining state inside this component
          name="subscription_name" // we added a name attribute to each input component so that our handleChange knows which input we are chnaging state in
          required
        />
        <span>Service Price</span>

        <input
          type="text"
          id="servicePriceInput"
          placeholder="Monthly Price"
          onChange={handleChange}
          value={formData.monthly_price}
          name="monthly_price"
          required
        />
        <span>Category</span>

        <select 
          id='categoryselect' 
          onChange={handleChange} 
          name="category"  
          // Added formData in front
          value={formData.category}
        >
          <option value="Other">Other</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Food">Food</option>
        </select>
        {/* 
        <select name="prepopulated_service_name" id='prepopulated_service_name'>
          {
            once the user selects a subscription category, we need another dropdown menu to select the pre-populated subscription. I am thinking we will need to
            a get request here. Once we get the info to populate the form.
          }
        </select> */}
        <button type='submit' id='AddCardButton'>Add Subscription</button>
      </form>
    </div>
  );
}
