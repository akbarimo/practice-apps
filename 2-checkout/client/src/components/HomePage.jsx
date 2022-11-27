import React, { useState, useEffect } from 'react';
import F1 from './F1.jsx';
import F2 from './F2.jsx';
import F3 from './F3.jsx';

const HomePage = () => {

  const [formStatus, setFormStatus] = useState({});
  const [whichForm, setWhichForm] = useState('F1');

  return (
    <div>
      <h1>FORM PAGE</h1>
      {whichForm === 'F1'
      ? <F1 setFormStatus={setFormStatus} setWhichForm={setWhichForm}/>
      : whichForm === 'F2'
      ? <F2 formStatus={formStatus} setFormStatus={setFormStatus} setWhichForm={setWhichForm}/>
      : <F3 formStatus={formStatus} setFormStatus={setFormStatus} setWhichForm={setWhichForm}/>
      }
    </div>
  )
};

export default HomePage;