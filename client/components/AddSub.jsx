import React from 'react';
import { useState } from 'react';
import SubCard from './SubCard.jsx';
import CardContainer from './CardContainer.jsx';

export default function AddSub() {

  const [formData, setFormData] = useState({ // add username property
    //username: '',
    subscription_name: '',
    monthly_price: '',
    category: 'other', //give default value
    due_date: 'PLACEHOLDER' // add later, leaving it as an empty string for now
  });

  const handleSubmit = (e) => {
    // console.log('COOKIES', document.cookie);
    // //token=kelvin

    // setFormData(old => {
    //   return (
    //     {
    //       ...old,
    //       username: document.cookie.username,
    //     }
    //   );
    // });




    e.preventDefault();
    //save the data and send the information to the backend 
    //we will need a put request to add this to the category? 
    
    
    const body = formData;
    const url = '/api/users'; // don't think we defined this yet, don't see a POST handler in subscriptionController file

    fetch(url, {
      method: 'PATCH', // chnaged from PUT req to POST req
      headers: { 
        'Content-Type': 'Application/JSON' 
      },
      body: JSON.stringify(body)
    })
      .then(res => {

        res.json();
        console.log('json res:', res.json());
      })

      .then(data => {
        console.log('Data:',  data);
      })

      .catch((err) => {
        console.log('Error:', err);
      });
  };

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData(oldData => {
      return (
        {
          ...oldData, //Changed OldData to oldData
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
          //Remove value
          name="subscription_name" //Added formData. in front of subscription_name
        />
        <span>Service Price</span>

        <input
          type="text"
          id="servicePriceInput"
          placeholder="Monthly Price"
          onChange={handleChange}
          //remove value
          name="monthly_price"
        />
        <span>Category</span>

        <select 
          /* name="category" */ 
          id='categoryselect' 
          onChange={handleChange} 
          name="category"  //Added formData. infront
          value={formData.category}
        >
          <option value="other">Other</option> {/* changed default to other */}
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
