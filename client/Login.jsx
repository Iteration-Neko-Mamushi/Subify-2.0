import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from './assets/Subify_Logo.png';

export default function Login() {
  
  const URL = '/api/authenticate/';
  
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate('/');

  function handleChange(e) {
    const { name, value} = e.target;

    setLoginData(old => {
      return (
        {
          ...old,
          [name]: value
        }
      );
    });

  }


  const handleSubmit = async (e) => {
    e.preventDefault();


    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData),
    })
      .then(res => res.json())
      .then(result => {
        if(result.username){

          console.log('LOGGED IN!');

          setLoginData({
            username: '',
            password: ''
          });

          navigate('/home');
        }

        else
          console.log('INVALID CREDENTIALS');
      });
      
  };

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
              onChange={handleChange} 
              value={loginData.username} 
              name='username'
            />
            <input 
              type="password" 
              id="passwordLogin" 
              placeholder="password" 
              onChange={handleChange}
              value={loginData.password}
              name='password'
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