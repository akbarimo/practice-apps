import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Form = ({getLatest, isForm, setIsForm, setIsEditing, isEditing}) => {

  const [wordQuery, setWordQuery] = useState('');
  const [definitionQuery, setDefinitionQuery] = useState('');

  const postData = (doc) => {
    axios.post('/words', doc)
      .then(() => {
        getLatest();
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (isEditing) {
      setIsForm(isForm);
      setIsEditing(false);
    }
    postData({word: wordQuery, definition: definitionQuery});
    setWordQuery('');
    setDefinitionQuery('');
  }

  return (
    <div id="form-box">
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="input-field">
          <label htmlFor="word-input" className="input-label">Word: </label>
          <input name="word-input" id="word-input" value={wordQuery} onChange={(e) => setWordQuery(e.target.value)}>
          </input>
        </div>
        <div className="input-field">
          <label htmlFor="definition-input" className="input-label">Definition: </label>
          <input name="definition-input" id="definition-input" value={definitionQuery} onChange={e => setDefinitionQuery(e.target.value)}>
          </input>
        </div>
        <button id="form-button" disabled={!wordQuery.trim().length || !definitionQuery.trim().length}>Submit</button>
      </form>
    </div>
  );

  };

export default Form;