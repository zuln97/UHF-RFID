var express = require('express'), //Import the express module

  app = express(),

  port = process.env.PORT || 3000,

  mongoose = require('mongoose'), //Import the mongoose module

  Tag = require('./restapi/models/tagModel'),

  bodyParser = require('body-parser'); //Import the body-parser module
  
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Set up default mongoose connection
mongoose.connect('mongodb://localhost/rfid');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var routes = require('./restapi/routes/tagRoutes');

routes(app);

app.use(function(req, res) {

  res.status(404).send({url: req.originalUrl + ' not found'})

});

app.listen(port);

console.log('rfid -  RESTful web services with Nodejs started on: ' + port);