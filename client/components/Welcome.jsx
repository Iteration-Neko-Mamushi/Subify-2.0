import React, { useEffect, useState } from 'react';
import logo from '../assets/Subify_Logo.png';


export default function Welcome() {
  
  const[currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    console.log('Run');
    setCurrentUser(document.cookie.split('=')[1]);
  },[document.cookie.split('=')[1]]);

  return (
    <div id='topcontainer'>
      <div id='logocontainer'>
        <img src={ logo } alt="" />
      </div>
      <div id='welcomemessage'>
        <h3>Hello, {currentUser} </h3>
      </div>
    </div>
  );
}
