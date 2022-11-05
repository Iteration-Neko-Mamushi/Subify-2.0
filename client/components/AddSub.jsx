import React from 'react';

export default function AddSub() {
  return (
    <div>
      <form className='addSubForm'>
        <input type="text" id="serviceNameInput" placeholder="username" value={null} />
        <input type="password" id="servicePriceInput" placeholder="password" value={null}/>
        <select name="category" id='categoryselect'>
          <option value="entertainment">Entertainment</option>
          <option value="food"></option>
        </select>
        <input type="text" id="lastnameSignup" placeholder="lastname" value={null} />
        <input type="text" id="emailSignup" placeholder="email" value={null} />
        <input type="text" id="phonenumberSignup" placeholder="phonenumber" value={null} />
        <button type='submit' id='signupButton'>Add Subscription</button>
      </form>
    </div>
  );
}
