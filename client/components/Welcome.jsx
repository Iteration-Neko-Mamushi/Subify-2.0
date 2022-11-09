import React, { useEffect, useState } from 'react';
import logo from '../assets/Subify_Logo.png';
import profilepic from '../assets/profile-pic.jpg';
import { Navigate } from 'react-router-dom';


export default function Welcome() {
  
  const[currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    console.log('Run');
    setCurrentUser(document.cookie.split('=')[1]);
  },[document.cookie.split('=')[1]]);

  return (
    <div id='topcontainer'>
      <div id='logocontainer'>
        <img id='home-logo' src={ logo } alt="" />
      </div>
      <div id='welcome-container'>
        <div id='welcome-message'>

        </div>
        <img id='profile-pic' src={ profilepic }/>
      </div>
    </div>
  );
}
