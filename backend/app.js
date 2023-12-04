const express = require('express');

const app = express();
// const viewRouter = require('./routes/viewRouter');
// app.use('/', viewRouter);

app.all('*', (req, res, next) => {
  res(`Can't find ${req.originalUrl} on this server`, 404);
});

module.exports = app;
