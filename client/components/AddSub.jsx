import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Context } from '../Context.js';
import { useNavigate } from 'react-router-dom';

export default function AddSub(props) {
  
  const navigate = useNavigate('/');

  // Destructure state variables from Context API
  const {subscriptions, setSubscriptions} = useContext(Context);

  const [formData, setFormData] = useState({
    subscription_name: '',
    monthly_price: '',
    // Assigning default values to the following properties
    category: 'other',
    due_date: 'PLACEHOLDER'
  });




  const handleSubmit = (e) => {
    e.preventDefault();

    // Save data and relay to the backend via a PATCH request    
    const body = formData;
    const url = '/api/users';

    fetch(url, {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'Application/JSON' 
      },
      body: JSON.stringify(body)
    })
      .then(res => {
        res.json();
      })
      .then(data => {

        console.log('Data:',  data);

        setFormData(old => {
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

    // What is this doing??
    // setSubscriptions([...subscriptions, 'Refresh']); 
  };

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData(oldData => {
      return (
        {
          ...oldData, 
          [name]: value
        }
      );
    });
    console.log('formData', formData);
  }

  return (
    <div>
      <form className='addSubForm' onSubmit={handleSubmit}>
        <span>Service Name</span>
        <input
          type="text"
          id="serviceNameInput"
          placeholder="Service Name"
          onChange={handleChange}
          // Not absolutely necessary -- will work without, but just best practice -- Reason: allows React to remain in control of state
          // Added formData in front of subscription_name
          value={formData.subscription_name} 
          name="subscription_name" 
        />
        <span>Service Price</span>

        <input
          type="text"
          id="servicePriceInput"
          placeholder="Monthly Price"
          onChange={handleChange}
          value={formData.monthly_price}
          name="monthly_price"
        />
        <span>Category</span>

        <select 
          id='categoryselect' 
          onChange={handleChange} 
          name="category"  
          // Added formData in front
          value={formData.category}
        >
          <option value="other">Other</option>
          <option value="entertainment">Entertainment</option>
          <option value="food">Food</option>
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
