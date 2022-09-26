const dotenv = require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { logger } = require('./middleware/logger.js');
const errorHandler = require('./middleware/error');

const SERVER_PORT = process.env.PORT || 3500;
app.use(logger);

app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', require('./routes/root.route'));

app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not found' });
  } else {
    res.type('txt').send('404 not found');
  }
});

app.use(errorHandler);

app.listen(SERVER_PORT, () =>
  console.log(`Server started on http://localhost:${SERVER_PORT}`)
);
