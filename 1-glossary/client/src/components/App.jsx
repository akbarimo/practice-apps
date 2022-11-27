import React, { useState, useEffect } from 'react';
import HomePage from './HomePage.jsx';
import Loading from './Loading.jsx';
import axios from 'axios';

const App = () => {

  const [words, setWords] = useState();
  const [renderedWords, setRenderedWords] = useState();

  const getLatest = (data) => {
    axios.get('/words', data)
      .then((response) => {
        const dbLatest = response.data;
          setWords(dbLatest);
          return dbLatest;
        })
        .then((data) => {
          setRenderedWords(data);
        });
  };

  useEffect(() => {
    getLatest();
  }, []);

  return (
    <div>
      {renderedWords
      ? <HomePage words={words} setWords={setWords} getLatest={getLatest} renderedWords={renderedWords} setRenderedWords={setRenderedWords} />
      : <Loading setWords={setWords} />}
    </div>
  );
}

export default App;

 // const seedDatabase = () => {
  //   const input = [{
  //     word: "copy",
  //     definition: "a thing made to be similar or identical to another thing",
  //   },
  //   {
  //     word: "paste",
  //     definition: "a tasty mixture to be spread on bread or crackers or used in preparing other dishes",
  //   },
  //   {
  //     word: "duplicate",
  //     definition: "a copy that corresponds to an original exactly",
  //   },
  //   {
  //     word: "replicate",
  //     definition: "make or do or perform again",
  //   },
  //   {
  //     word: "mustard",
  //     definition: "leaves eaten as cooked greens",
  //   },
  //   {
  //     word: "trace",
  //     definition: "either of two lines that connect a horse's harness to a wagon or other vehicle or to a whiffletree",
  //   },
  //   {
  //     word: "pirate",
  //     definition: "a ship that is manned by pirates",
  //   },
  //   {
  //     word: "wafer",
  //     definition: "a small thin crisp cake or cookie",
  //   },
  //   {
  //     word: "imitation",
  //     definition: "something copied or derived from an original",
  //   },
  //   {
  //     word: "photocopy",
  //     definition: "a photographic copy of written or printed or graphic work",
  //   },
  //   {
  //     word: "typescript",
  //     definition: "typewritten matter especially a typewritten copy of a manuscript",
  //   },
  //   {
  //     word: "puffy",
  //     definition: "a dough-like mixture of whiting and boiled linseed oil; used especially to patch woodwork or secure panes of glass",
  //   },
  //   {
  //     word: "chocolate",
  //     definition: "a medium brown to dark-brown color",
  //   }];
  //   input.forEach((entry) => {
  //     axios.post('/words', entry);
  //   })
  // }

  // useEffect(() => {
  //   seedDatabase();
  // }, []);