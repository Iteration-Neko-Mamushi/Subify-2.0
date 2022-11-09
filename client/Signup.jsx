import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from './assets/Subify_Logo.png';
export default function Signup() {

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

    console.log(formData);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const users = {username, password, account_date, first_name, last_name, location, email, phone_number};

    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    console.log('res data:', data);
    if (response.ok){
      setFormData({
        username: '', 
        password: '', 
        account_date: '', 
        first_name: '', 
        last_name: '', 
        location: '', 
        email: '', 
        phone_number: ''
      })
    }

    navigate('/');
  };

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
              onChange={handleChange} 
              value={formData.username} 
              name='username'
              //name=""
            /> 
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input 
              onChange={handleChange}
              type="password"
              value={formData.password} 
              name='password'
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
            />
          </div>
          <div className='form-group'>
            <label htmlFor='lastname'>Last name</label>
            <input
              type="text"  
              onChange={handleChange}
              value={formData.last_name}
              name='last_name'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='location'>
          Location</label>
            <input 
              type="text" 
              onChange={handleChange}
              value={formData.location} 
              name='location'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input 
              type="text"  
              onChange={handleChange}
              value={formData.email}
              name='email'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input
              type="text" 
              onChange={handleChange}
              value={formData.phone_number}
              name='phone_number'
              />
          </div>
          <button className='button'>Sign Up</button>
        </form>
      </div>
    </div>
  );
}