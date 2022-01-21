let mongoose = require('mongoose');

let Schema = mongoose.Schema;

const ContactSchema = new Schema (
{
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	phoneNumber: {type: Number, required: true},
	email: {type: String, required: true},
});

module.exports = mongoose.model('Contact', ContactSchema);