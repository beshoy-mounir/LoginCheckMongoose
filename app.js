const express = require('express');
const morgan = require('morgan');
const app = express();
// def
const defaultRoute = require('./Routes/defaultRoute.js');
const checkRoute = require('./Routes/checkRoute.js');
// mid
app.use(express.json());
app.use(morgan('dev'));
// handlers

app.use('/', defaultRoute);
app.use('/check', checkRoute);
// export

module.exports = app;
