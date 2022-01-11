var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Defines what individual author document looks like
var AuthorSchema = new Schema(
  {
    firstName: {type: String, max: 100},
    familyName: {type: String, max: 100},
    dateOfBirth: {type: Date},
    dateOfDeath: {type: Date},
  }
);

//Export model - compiles a model
// instances of models are called documents

module.exports = mongoose.model('Author', AuthorSchema);

//The first argument is the singular name of the collection your model is for. 
//Mongoose automatically looks for the plural, lowercased version of your model name. 
//Thus, for the example above, the model Author is for the authors collection in the database.