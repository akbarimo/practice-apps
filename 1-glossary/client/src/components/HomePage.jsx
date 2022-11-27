import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import Form from './Form.jsx';
import Glossary from './Glossary.jsx';

const HomePage = ({words, setWords, getLatest, renderedWords, setRenderedWords}) => {

  const [isForm, setIsForm] = useState(false);

  return (
    <div>
      <Search words={words} setRenderedWords={setRenderedWords}/>
      <Form getLatest={getLatest} isForm={isForm} setIsForm={setIsForm}/>
      <Glossary getLatest={getLatest} renderedWords={renderedWords} words={words} isForm={isForm} setIsForm={setIsForm} />
    </div>
  );

  };

export default HomePage;