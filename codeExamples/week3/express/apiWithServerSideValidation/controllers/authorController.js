var Author = require('../models/author');
const { body } = require('express-validator/check')
const { validationResult } = require('express-validator/check');
// Retrieve list of all Authors.
exports.author_list = function(req, res) {
  Author.find({}, (err, authors) => {
    res.json(authors)
  })
};

// Retrieve detail info for a specific Author.
exports.author_detail = function(req, res) {
    //querying the database for a author that matches the authorID parameter from the URL request
   // Author.findById(req.params.authorId, (err, author) => {
     // res.json(author)
      // when using middleware
      res.json(req.author)
    //}) 
};

// Handle Author create on POST.
exports.author_create_post = async (req, res, next) => {
  //let author = new Author(req.body); 
  //Need this for persistance
  //author.save();
  //res.status(201).send(author) 
  try {
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

    if (!errors.isEmpty()) {
      console.log(errors)
      res.status(422).json({ errors: errors.array() });
      return;
    }

    const { firstName, familyName, dateOfBirth, dateOfDeath } = req.body
    
    const author = await Author.create({
      firstName,
      familyName,
      dateOfBirth,
      dateOfDeath,   
    })
    res.json(author)
 } catch(err) {
   return next(err)
 }
};

// Handle Author delete on DELETE.
exports.author_delete = function(req, res) {
  Author.findById(req.params.authorId, (err, author) => {
    // with middleware
    //  req.author.remove(err => {
    author.remove(err => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(204).send('removed')
        }
    })
  })
};


/* Right way to do an update as PUT*/
exports.author_update = function(req, res) {
  Author.findByIdAndUpdate(req.params.authorId,{$set:req.body},{new: true}, function(err, result){
    if(err){
        console.log('error in put');
        console.log(err);
    }
    console.log("RESULT: " + result);
    res.json(result);
  });
};

exports.validate = (method) => {
  switch (method) {
    case 'author_create_post': {
      console.log('validating author')
     return [ 
        body('firstName', 'firstName doesn\'t exist').exists(),
        body('familyName', 'famlyName doesn\'t exist').exists()
       ]   
    }
  }
}