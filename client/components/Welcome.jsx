import React from 'react';
import logo from '../assets/Subify_Logo.png';

const welcomemessage = document.cookie.split('=')[1]

export default function Welcome() {
  return (
    <div id='topcontainer'>
      <div id='logocontainer'>
        <img src={ logo }alt="" />
      </div>
      <div id='welcomemessage'>
        <h3>Hello, {welcomemessage}</h3>
      </div>
    </div>
  );
}
