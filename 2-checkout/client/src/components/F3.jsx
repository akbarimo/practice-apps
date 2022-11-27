import React, { useState, useEffect } from 'react';
import axios from 'axios';

const F3 = ({setFormStatus, setWhichForm, formStatus}) => {

  const [currentCard, setCurrentCard] = useState('');
  const [currentExpiry, setCurrentExpiry] = useState('');
  const [currentCVV, setCurrentCVV] = useState('');
  const [currentBillingZip, setCurrentBillingZip] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, card: currentCard, expiry: currentExpiry, cvv: currentCVV, billingZip: currentBillingZip });
    console.log('Submitted', { ...formStatus, card: currentCard, expiry: currentExpiry, cvv: currentCVV, billingZip: currentBillingZip });
    axios.post('/api/forms', { ...formStatus, card: currentCard, expiry: currentExpiry, cvv: currentCVV, billingZip: currentBillingZip })
      .then(() => {
        console.log('Success!')
      })
      .catch((err) => {
        console.error(`Failure ${err}`)
      })
    setWhichForm('F1');
    setCurrentCard('');
    setCurrentExpiry('');
    setCurrentCVV('');
    setCurrentBillingZip('');
  };

  return (
    <div id="form-three">
      <form onSubmit={submitHandler}>
        <div id="card-entry">
          <label id="card-label" htmlFor="card-input">Card: </label>
          <input id="card-input" name="card-input" value={currentCard} onChange={(e) => setCurrentCard(e.target.value)}></input>
        </div>
        <div id="expiry-entry">
          <label id="expiry-label" htmlFor="expiry-input">Expiry: </label>
          <input id="expiry-input" name="expiry-input" value={currentExpiry} onChange={(e) => setCurrentExpiry(e.target.value)}></input>
        </div>
        <div id="cvv-entry">
          <label id="cvv-label" htmlFor="cvv-input">CVV: </label>
          <input id="cvv-input" name="cvv-input" value={currentCVV} onChange={(e) => setCurrentCVV(e.target.value)}></input>
        </div>
        <div id="billing-entry">
          <label id="billing-label" htmlFor="billing-input">Billing zip: </label>
          <input id="billing-input" name="billing-input" value={currentBillingZip} onChange={(e) => setCurrentBillingZip(e.target.value)}></input>
        </div>
        <button id="form-three-submit">Submit</button>
      </form>
    </div>
  );

};

export default F3;