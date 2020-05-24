require('dotenv').config();

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  cors({
    credentials: true,
    origin: [
      'http://localhost:3000',
      'https://moviefinderapp.now.sh',
    ],
  })
);

app.get('/api/test', (req, res) => res.json({ message: 'hello' }));

app.use((req, res) => res.sendFile(__dirname + '/public/index.html'));

module.exports = app;
