import React from 'react';
import { useState } from 'react';
import logo from './assets/Subify_Logo.png';
export default function Signup() {



  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [account_date, setAccount_date] = useState('');
  const [first_name, setFirstname] = useState('');
  const [last_name, setLastname] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
    


 


  const handleSubmit = async (e) =>{
    e.preventDefault();
    // const users = {username, account_date, first_name, last_name, location, email, phonenumber}
    // const acctDate = new Date().toLocaleString();

    

    const users = {username, password, account_date, first_name, last_name, location, email, phone_number};

    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(users),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data);
    console.log('res data:', data);

    if (response.ok){
      setUsername('');
      setPassword('');
      setAccount_date('');
      setFirstname('');
      setLastname('');
      setLocation('');
      setEmail('');
    }

  };

  return (
    <div className= "base-container">
      <div id='signinlogo'>
        <img src={ logo } alt="" className='logoimage'/>
      </div>
      <div className='content'>
        {/* <img src={logo} alt='logo' className='logo' /> */}
        <form className='form' onSubmit={handleSubmit}>
          {/* <div className="header">Shopify</div> */}
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input 
              type="text"
              onChange={(e) => setUsername(e.target.value) } 
              value={username} 
            /> 
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input 
              onChange={(e) => setPassword(e.target.value) } 
              type="password"
              value={password} 
            /> 
          </div>
          <div className='form-group'>
            <label htmlFor='Firstname'>First Name</label>
            <input 
              type="text" 
              id="firstnameSignup" 
              onChange={(e) => setFirstname(e.target.value)}
              value={first_name}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='lastname'>Last name</label>
            <input
              type="text"  
              onChange={(e) => setLastname(e.target.value)}
              value={last_name}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='location'>
          Location</label>
            <input 
              type="text" 
              onChange={(e) => setLocation(e.target.value)}
              value={location} 
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input 
              type="text"  
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input
              type="text" 
              onChange={(e) => setPhoneNumber (e.target.value)}
              value={phone_number} />
          </div>
          <button className='button'>Sign Up</button>
        </form>
      </div>
    </div>
  );
}