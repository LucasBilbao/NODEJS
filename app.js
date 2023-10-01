const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tours');
const userRouter = require('./routes/users');

const app = express();

// 1) MIDDLEWARE
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

const ENDPOINTS = { TOURS: '/api/v1/tours', USERS: '/api/v1/users' };

// 3) ROUTES
app.use(ENDPOINTS.TOURS, tourRouter);
app.use(ENDPOINTS.USERS, userRouter);

module.exports = app;
