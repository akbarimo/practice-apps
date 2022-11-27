import React, { useState, useEffect } from 'react';
import GlossaryEntry from './GlossaryEntry.jsx';

const Glossary = ({renderedWords, getLatest, isForm, setIsForm}) => {

  return (
    <div>
      {renderedWords.map((word, idx) => <GlossaryEntry setIsForm={setIsForm} isForm={isForm} getLatest={getLatest} word={word} key={idx} />)}
    </div>
  );

  };

export default Glossary;