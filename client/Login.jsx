import React from 'react';
import { useState} from 'react';
export default function Login() {
  
  const URL = 'http://localhost:8080/signin/';
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
    });
    setPassword('');
    setUsername('');
  };

  return (
    <div id='login'>
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
        <button id='loginButton'>Login</button>
      </form>
    </div>
  );
}