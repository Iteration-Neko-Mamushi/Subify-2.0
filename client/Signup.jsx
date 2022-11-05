import React from 'react';
import { useState } from 'react';
export default function Signup() {



  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [account_date, setAccount_date] = useState('')
  const [first_name, setFirstname] = useState('')
  const [last_name, setLastname] = useState('')
  const [location, setLocation] = useState('')
  const [email, setEmail] = useState('')
  const [phone_number, setPhoneNumber] = useState('')
    


 


  const handleSubmit = async (e) =>{
      e.preventDefault()
      // const users = {username, account_date, first_name, last_name, location, email, phonenumber}
      // const acctDate = new Date().toLocaleString();

    

        const users = {username, password, account_date, first_name, last_name, location, email, phone_number}

      const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify(users),
          headers: {
            'Content-Type': 'application/json'
          }
      });

      const data = await response.json();
        console.log(data)
      console.log('res data:', data)

        if (response.ok){
            setUsername('')
            setPassword('')
            setAccount_date('')
            setFirstName('')
            setLastName('')
            setLocation('')
            setEmail('')
        }

  }

  return (
    <div className='form'>
      <form className='signUpForm' onSubmit={handleSubmit}>
        <input 
         type="text"
         id="usernameSignup" 
         placeholder="username"
         onChange={(e) => setUsername(e.target.value) } 
         value={username} 
         /> 
        
        <input 
         type="password"
         id="passwordSignup" 
         placeholder="password"
         onChange={(e) => setPassword(e.target.value) } 
         value={password} 
         /> 
        <input 
        type="text" 
        id="firstnameSignup" 
        placeholder="date" 
        onChange={(e) => setaccount_date(e.target.value)}
        value={account_date}
        />
        <input 
        type="text" 
        id="firstnameSignup" 
        placeholder="firstname" 
        onChange={(e) => setFirstname(e.target.value)}
        value={first_name}
        />
        <input
        type="text" 
        id="lastnameSignup" 
        placeholder="lastname" 
        onChange={(e) => setLastname(e.target.value)}
        value={last_name}
        />
        <input 
        type="text" 
        id="location" 
        placeholder="location" 
        onChange={(e) => setLocation(e.target.value)}
        value={location} 
        />

        <input 
        type="text" 
        id="emailSignup" 
        placeholder="email" 
        onChange={(e) => setEmail(e.target.value)}
        value={email}
         />

        <input
         type="text" 
         id="phonenumberSignup"
         placeholder="phonenumber" 
         onChange={(e) => setPhoneNumber (e.target.value)}
         value={phone_number} />
        <button id='signupButton'>Sign Up</button>
      </form>
    </div>
  );
}