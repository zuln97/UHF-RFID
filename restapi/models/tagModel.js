'use strict';

var mongoose = require('mongoose'); //Require Mongoose


//Define a schema
var Schema = mongoose.Schema;
 
var TagSchema = new Schema({

	Ant_Id: { type: String, required:  'Ant_Id cannot be left blank.' },

	PC: { type: String, required:  'PC cannot be left blank.' },
  
	EPC:    { type: String, required:  'EPC cannot be left blank.', index: {unique: true}},

	Date:  {type: Date, required: true, default: Date.now }
});
// Compile model from schema
module.exports = mongoose.model('Tags', TagSchema);

//Define a schema
var LogSchema = new Schema({

	Ant_Id: { type: String, required:  'Ant_Id cannot be left blank.' },

	PC: { type: String, required:  'PC cannot be left blank.' },
  
	EPC:    { type: String, required:  'EPC cannot be left blank.'},

	Date:  {type: Date, required: true, default: Date.now }
});
// Compile model from schema
module.exports = mongoose.model('Logs', LogSchema);