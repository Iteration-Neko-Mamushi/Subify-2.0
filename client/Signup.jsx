import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/Subify_Logo.png';

export default function Signup() {
  // completely refactored this form component to be a controlled component
  // consolidated all state variables inside of one state object
  const [formData, setFormData] = useState(
    {
      username: '', 
      password: '', 
      account_date: '', 
      first_name: '', 
      last_name: '', 
      location: '', 
      email: '', 
      phone_number: ''
    }
  );

  const navigate = useNavigate();

  function handleChange(e) {// created a handleChnage function to manage state change inside this component
    const { name, value } = e.target;// destructuring the name and value from the event obj
    
    setFormData(oldData => {// setting state to reflect each key stroke which is causing state change
      return (
        {
          ...oldData,// we want to spread in the old state obj
          [name]: value// than overwrite the value of the property where the state chnage is occurring
        }
      );
    });
    console.log(formData);
  }

  const handleSubmit = async (e) => {//refactored handleSubmit functionality to reflect our refactored code
    e.preventDefault();

    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(formData),// passing in the state obj instead of the individual state properties
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    console.log('res data:', data);
    if (response.ok){ // once we confirm that the PATCH request is successful...
      setFormData({ // we reset state to its default state so the next user can start with a clean slate, aka clear input fields
        username: '', 
        password: '', 
        account_date: '', 
        first_name: '', 
        last_name: '', 
        location: '', 
        email: '', 
        phone_number: ''
      });
    }

    navigate('/');// redirect to root
  };

  // the comments below apply to all input tags below
  return (
    <div className= "base-container">
      <div id='signinlogo'>
        <img src={ logo } alt="" className='logoimage'/>
      </div>
      <div className='content'>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input 
              type="text"
              onChange={handleChange} // as part of the refactor, we defined and assigned new functionality to handle the onChange event
              value={formData.username} // we are reassigning the value of each input so that we can transform this into a controlled component, where we are putting React in charge of determining state inside this component
              name='username'// we added a name attribute to each input component so that our handleChange knows which input we are chnaging state in
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input 
              onChange={handleChange}
              type="password"
              value={formData.password} 
              name='password'
              required
            /> 
          </div>
          <div className='form-group'>
            <label htmlFor='Firstname'>First Name</label>
            <input 
              type="text" 
              id="firstnameSignup" 
              onChange={handleChange}
              value={formData.first_name}
              name='first_name'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='lastname'>Last name</label>
            <input
              type="text"  
              onChange={handleChange}
              value={formData.last_name}
              name='last_name'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='location'>Country</label>
            <input 
              type="text" 
              onChange={handleChange}
              value={formData.location} 
              name='location'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input 
              type="text"  
              onChange={handleChange}
              value={formData.email}
              name='email'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input
              type="text" 
              onChange={handleChange}
              value={formData.phone_number}
              name='phone_number'
              required
            />
          </div>
          <button className='button'>Sign Up</button>
        </form>
      </div>
    </div>
  );
}