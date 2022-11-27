import React, { useState, useEffect, useRef } from 'react';
import Form from './Form.jsx';
import axios from 'axios';

const GlossaryEntry = ({word, getLatest, isForm, setIsForm}) => {

  const [isEditing, setIsEditing] = useState(false);

  const wordValue = word.word;
  const definitionValue = word.definition;

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    axios.delete('/words', {data: {word: wordValue}})
    .then(() => getLatest());
  }

  return (
    <div id="glossary-entry">
      <div id="glossary-word">Word: {word.word}</div>
      <div id="glossary-definition">Definition: {word.definition}</div>
      {isEditing && <Form getLatest={getLatest} isForm={isForm} setIsForm={setIsForm} setIsEditing={setIsEditing} isEditing={isEditing} />}
      {!isEditing && <button id="edit-button" onClick={handleEdit}>{isForm ? "Submit" : "Edit"}</button>}
      {!isEditing && <button id="delete-button" onClick={handleDelete} >Delete</button>}
    </div>
  );

  };

export default GlossaryEntry;