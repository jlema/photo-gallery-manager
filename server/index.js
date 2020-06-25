const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');

const photoRouter = require('./routers/photoRouter');
const galleryRouter = require('./routers/galleryRouter');
require('./db/connection');

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Priority serve any static files.
app.use(express.static(path.join(__dirname, '..', 'build')));

// Answer API requests.
app.use('/galleries', galleryRouter);
app.use('/photos', photoRouter);

// All remaining requests return the React app, so it can handle routing.
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
