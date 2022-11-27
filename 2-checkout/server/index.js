require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const sessionHandler = require('./middleware/session-handler');
const logger = require('./middleware/logger');
const {router} = require('./routers')
const db = require('./database/db.js');

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(sessionHandler);

app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.listen(PORT, console.log(`Listening at http://localhost:${PORT}`));