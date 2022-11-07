import React from 'react';
import { useState } from 'react';
import SubCard from './SubCard.jsx'
import CardContainer from './CardContainer.jsx';

export default function AddSub() {

  const [formData, setFormData] = useState({
    subscription_name: "",
    monthlyPrice: "",
    category: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //save the data and send the information to the backend 
    //we will need a put request to add this to the category? 
    const body = setFormData;
    fetch('', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch((err) => {
        console.log(err);
      });
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData(oldData => {
      return (
        {
          ...OldData,
          [name]: /* type === "checkbox" ? checked : */ value
        }
      )
    })
    console.log('formData', formData)
  };

  return (
    <div>
      <form className='addSubForm' onSubmit={handleSubmit}>
        <span>Service Name</span>
        <input
          type="text"
          id="serviceNameInput"
          placeholder="Service Name"
          onChange={handleChange}
          value={formData.subscription_name}
          name={subscription_name}
        />
        <span>Service Price</span>

        <input
          type="text"
          id="servicePriceInput"
          placeholder="monthlyPrice"
          onChange={handleChange}
          value={formData.monthlyPrice}
          name={_price}
        />
        <span>Category</span>

        <select name="category" id='categoryselect' onChange={handleChange} value={formData.category} name={category}>
          <option value="default">Other</option>
          <option value="entertainment">Entertainment</option>
          <option value="food">Food</option>
        </select>

        <select name="prepopulated_service_name" id='prepopulated_service_name'>
          {
            //once the user selects a subscription category, we need another dropdown menu to select the pre-populated subscription. I am thinking we will need to
            //a get request here. Once we get the info to populate the form.

          }
        </select>

        <button type='submit' id='AddCardButton'>Add Subscription</button>

      </form>
    </div>
  )
}
