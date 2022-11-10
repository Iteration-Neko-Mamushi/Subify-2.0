import React, { useEffect, useState } from 'react';
import logo from '../assets/Subify_Logo.png';
import profilepic from '../assets/profile-pic.jpg';
import { Navigate } from 'react-router-dom';
import profilebar from '../assets/bar.png';

// Home page's welcome header
export default function Welcome() {
  
  // Set user state
  const[ currentUser, setCurrentUser ] = useState('');

  // Will retrieve user info from cookie each time the home page is loaded
  useEffect(() => {
    console.log('Run');
    setCurrentUser(document.cookie.split('=')[1]);
  },[document.cookie.split('=')[1]]);

  return (
    // "Containerizing" the welcome header for easier styling
    // Kept most of the original team's div structure there for now
    <div id='topcontainer'>
      <div id='logocontainer'>
        {/* App logo justified to left side of screen */}
        <img id='home-logo' src={ logo } alt="" />
      </div>
      <div id='welcome-container'>
        <div id='welcome-message'>
        </div>
        {/* User profile pic justified to right side of screen -- currently hard-coded */}
        <img id='profile-pic' src={ profilepic }/>
      </div>
    </div>
  );
}
