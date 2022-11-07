import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from './assets/Subify_Logo.png';

export default function Login() {
  
  const URL = '/api/authenticate/';
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate('/');

  const handleSubmit = async (e) => {
    e.preventDefault();


    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if(result.username){
          console.log('LOGGED IN!');
          navigate('/home');
        }

        else
          console.log('INVALID CREDENTIALS');

        setPassword('');
        setUsername('');
      });
  };

  return (
  <div className='base-container'>
    <div id='signinlogo'>
      <img src={ logo } alt="" className='logoimage'/>
    </div>
    < div className='content'>
      <div className='formGroup'>
        <label>Login to Subify</label>
      <form className='loginForm' onSubmit={handleSubmit}>
        <input 
          type="text"
          id="usernameLogin" 
          placeholder="username"
          onChange={(e) => setUsername(e.target.value) } 
          value={username} 
        />
        <input 
          type="password" 
          id="passwordLogin" 
          placeholder="password" 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="button-container">
          <button className='button'>Login</button>
          <button class='button' onClick={() => navigate('/signup')}>Signup</button>
         
        </div>
      </form>
      </div>
      </div> 
    </div> 
  );
}