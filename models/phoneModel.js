var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var phoneSchema = new Schema({
	'marque' : String,
	'modele' : String,
	'prix' : Number,
	'img' : String,
	'capacite' : Number,
	'dim' : [Number]
});

module.exports = mongoose.model('phone', phoneSchema);
