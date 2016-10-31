require('pmx').init();

var express = require('express');
var addMiddlewares = require('./middlewares');
var addRoutes = require('./routes');
var config = require('./../config/app');

var app = express();
addMiddlewares(app);
addRoutes(app);


app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
