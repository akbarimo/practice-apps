require('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan')
const app = express();
const router = require('./router.js');

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(`${__dirname}/../client/dist`));

// Establishes the format of information coming in and will convert for me
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Prints out routes & requests to my console
app.use('dev', morgan);

// Establish a connection
app.use(router);

// Set to specific port or default to 8080
const PORT = process.env.PORT || 8080;

// Listen on port we assigned for incoming traffic
app.listen(PORT, console.log(`Listening at http://localhost:${process.env.PORT}`));
