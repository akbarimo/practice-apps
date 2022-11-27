import React, { useState, useEffect } from 'react';

const Search = ({words, setRenderedWords}) => {

  const [searchQuery, setSearchQuery] = useState('');

  const searchHandler = (e) => {
    e.preventDefault();
    const filteredWords = words.reduce((acc, word) => {
      if (word.word.toLowerCase().includes(searchQuery)) {
        acc.push(word);
      }
      return acc;
    }, []);
    setRenderedWords(filteredWords);
    setSearchQuery('');
  };

  return (
    <div>
      <div id="search-bar">
        <form onSubmit={e => searchHandler(e)}>
        <label id="search-label" htmlFor="search-input"></label>
        <input id="search-input" name="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
        <button id="search-button">Search</button>
        </form>
      </div>
    </div>
  );

};

export default Search;