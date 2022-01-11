var express = require('express');
var authorRouter = express.Router();
var Author = require('../../../models/author')
const { check, validationResult } = require('express-validator')

// Require controller modules.
var author_controller = require('../../../controllers/authorController');

//Note: the middleware defined in this file are referred to as
//router-level middleware

// a middleware function with no mount path. This code is executed for every request to the router
authorRouter.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

authorRouter.use('/', (req, res, next)=>{
  console.log("I run first before I retrieve all the authors")
  
  //Request vs Params parameters
  //If you want to identify a resource, you should use Path Variable. 
  // But if you want to sort or filter items, then you should use query parameter.
  
  for (const key in req.query) {
    console.log(key, req.query[key])
  }
  next()
})

authorRouter.use('/:authorId', (req, res, next) => {
  Author.findById( req.params.authorId, (err,author) => {
    if(err)
        res.status(500).send(err)
    else {
        // append to request object new property-value pair from db
        req.author = author;
        next()
    }
  })
})
authorRouter.route('/')
  .get(author_controller.author_list)  
  .post(author_controller.validate('author_create_post'), author_controller.author_create_post);


authorRouter.route('/:authorId')
  .get(author_controller.author_detail)
  .delete(author_controller.author_delete)
  
authorRouter.route('/:authorId/update')
  .put(author_controller.author_update)

module.exports = authorRouter;