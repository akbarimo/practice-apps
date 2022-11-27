import React, { useState, useEffect } from 'react';

const F1 = ({setFormStatus, setWhichForm}) => {

  const [currentUser, setCurrentUser] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setFormStatus({ user: currentUser, email: currentPassword, password: currentPassword });
    console.log('Submitted', { user: currentUser, email: currentPassword, password: currentPassword });
    setWhichForm('F2');
    setCurrentUser('');
    setCurrentEmail('');
    setCurrentPassword('');
  };

  return (
    <div id="form-one">
      <form onSubmit={submitHandler}>
        <div id="name-entry">
          <label id="name-label" htmlFor="name-input">Name: </label>
          <input id="name-input" name="name-input" value={currentUser} onChange={(e) => setCurrentUser(e.target.value)}></input>
        </div>
        <div id="email-entry">
          <label id="email-label" htmlFor="email-input">Email: </label>
          <input id="email-input" name="email-input" value={currentEmail} onChange={(e) => setCurrentEmail(e.target.value)}></input>
        </div>
        <div id="password-entry">
          <label id="password-label" htmlFor="password-input">Password: </label>
          <input id="password-input" name="password-input" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)}></input>
        </div>
        <button id="form-one-submit">Button RAWR</button>
      </form>
    </div>
  );

};

export default F1;