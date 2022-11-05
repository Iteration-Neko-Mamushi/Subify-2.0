import React from 'react';

export default function Signup() {
  return (
    <div>
      <form className='signUpForm'>
        <input type="text" id="usernameSignup" placeholder="username" value={null} />
        <input type="password" id="passwordSignup" placeholder="password" value={null}/>
        <input type="text" id="firstnameSignup" placeholder="firstname" value={null} />
        <input type="text" id="lastnameSignup" placeholder="lastname" value={null} />
        <input type="text" id="emailSignup" placeholder="email" value={null} />
        <input type="text" id="phonenumberSignup" placeholder="phonenumber" value={null} />
        <button type='submit' id='signupButton'>Sign Up</button>
      </form>
    </div>
  );
}
