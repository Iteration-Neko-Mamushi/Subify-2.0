import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from './assets/Subify_Logo.png';

export default function Login() {
  
  const URL = '/api/authenticate/';
  // completely refactored this form component to be a controlled component
  // consolidated all state variables inside of one state object
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate('/');

  function handleChange(e) { // created a handleChnage function to manage state change inside this component
    const { name, value} = e.target;// destructuring the name and value from the event obj

    setLoginData(old => {// setting state to reflect each key stroke which is causing state change
      return (
        {
          ...old,// we want to spread in the old state obj
          [name]: value// than overwrite the value of the property where the state chnage is occurring
        }
      );
    });

  }


  const handleSubmit = async (e) => {//refactored handleSubmit functionality to reflect our refactored code
    e.preventDefault();


    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData),// passing in the state obj instead of the individual state properties
    })
      .then(res => res.json())
      .then(result => {
        if(result.username){// once we confirm the request is successful...

          console.log('LOGGED IN!');

          setLoginData({// we reset state to its default state so the next user can start with a clean slate, aka clear input fields
            username: '',
            password: ''
          });

          navigate('/home');// we redirect to home
        }

        else
          console.log('INVALID CREDENTIALS');
      });

  };
  // the comments below apply to all input tags below
  return (
    <div className='base-container'>
      <div id='signinlogo'>
        <img src={ logo } alt="" className='logoimage'/>
      </div>
      <div className='content'>
        <div className='formGroup'>
          <label id='login-text'>Login to Subify</label>
          <form className='loginForm' onSubmit={handleSubmit}>
            <input 
              type="text"
              id="usernameLogin" 
              placeholder="username"
              onChange={handleChange} // as part of the refactor, we defined and assigned new functionality to handle the onChange event
              value={loginData.username} // we are reassigning the value of each input so that we can transform this into a controlled component, where we are putting React in charge of determining state inside this component
              name='username'// we added a name attribute to each input component so that our handleChange knows which input we are chnaging state in
              required
            />
            <input 
              type="password" 
              id="passwordLogin" 
              placeholder="password" 
              onChange={handleChange}
              value={loginData.password}
              name='password'
              required
            />
            <div className="button-container">
              <button className='button'>Login</button>
              <button className='button' onClick={() => navigate('/signup')}>Signup</button>
            </div>
          </form>
        </div>
      </div> 
    </div> 
  );
}