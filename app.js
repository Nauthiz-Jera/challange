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

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', index);
app.use('/users', users);
app.use('/addWidget', addWidget);
app.use('/allWidgets', allWidgets);
app.use('/updateQuantity', updateQuantity);
app.use('/submitOrder', submitOrder);

app.use('/*', staticFiles);

app.set('port', process.env.PORT || 3001);
const server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;
