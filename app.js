const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

/* Routes */
const index = require('./routes/index');
const users = require('./routes/users');
const addWidget = require('./routes/addWidget');
const allWidgets = require('./routes/allWidgets');
const updateQuantity = require('./routes/updateQuantity');
const submitOrder = require('./routes/submitOrder');

const app = express();

const config = require('./config/config');

mongoose.connect(config.uri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

const staticFiles = express.static(path.join(__dirname, '../../client/build'));
app.use(staticFiles);
app.use('/*', staticFiles);
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/addWidget', addWidget);
app.use('/allWidgets', allWidgets);
app.use('/updateQuantity', updateQuantity);
app.use('/submitOrder', submitOrder);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
