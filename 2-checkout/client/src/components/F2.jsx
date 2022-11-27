import React, { useState, useEffect } from 'react';

const F2 = ({setFormStatus, setWhichForm, formStatus}) => {

  const [currentAddress, setCurrentAddress] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [currentState, setCurrentState] = useState('');
  const [currentZip, setCurrentZip] = useState('');
  const [currentNumber, setCurrentNumber] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, address: currentAddress, city: currentCity, state: currentState, zip: currentZip, number: currentNumber });
    console.log('Submitted', { ...formStatus, address: currentAddress, city: currentCity, state: currentState, zip: currentZip, number: currentNumber });
    setWhichForm('F3');
    setCurrentAddress('');
    setCurrentCity('');
    setCurrentState('');
    setCurrentZip('');
    setCurrentNumber('');
  };

  return (
    <div id="form-three">
      <form onSubmit={submitHandler}>
        <div id="address-entry">
          <label id="address-label" htmlFor="address-input">Address: </label>
          <input id="address-input" name="address-input" value={currentAddress} onChange={(e) => setCurrentAddress(e.target.value)}></input>
        </div>
        <div id="city-entry">
          <label id="city-label" htmlFor="city-input">City: </label>
          <input id="city-input" name="city-input" value={currentCity} onChange={(e) => setCurrentCity(e.target.value)}></input>
        </div>
        <div id="state-entry">
          <label id="state-label" htmlFor="state-input">State: </label>
          <input id="state-input" name="state-input" value={currentState} onChange={(e) => setCurrentState(e.target.value)}></input>
        </div>
        <div id="zip-entry">
          <label id="zip-label" htmlFor="zip-input">Zip: </label>
          <input id="zip-input" name="zip-input" value={currentZip} onChange={(e) => setCurrentZip(e.target.value)}></input>
        </div>
        <div id="number-entry">
          <label id="number-label" htmlFor="number-input">Number: </label>
          <input id="number-input" name="number-input" value={currentNumber} onChange={(e) => setCurrentNumber(e.target.value)}></input>
        </div>
        <button id="form-two-submit">Button F2</button>
      </form>
    </div>
  );

};

export default F2;