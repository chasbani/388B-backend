var express = require('express');
var bookRouter = express.Router();
var Book = require('../../models/book')

/* GET books listing. */

bookRouter.use('/', (req, res, next)=>{
  console.log("I run first before I retrieve all the books")
  next()
})

bookRouter.use('/:bookId', (req, res, next)=>{
  Book.findById( req.params.bookId, (err,book)=>{
    if(err)
        res.status(500).send(err)
    else {
        req.book = book;
        next()
    }
  })
})
bookRouter.route('/')
  .get((req, res) => {
    Book.find({}, (err, books) => {
      res.json(books)
    })
  })  
  .post((req, res) => {
    let book = new Book(req.body); 
    book.save();
    res.status(201).send(book) 
  });


bookRouter.route('/:bookId')
  .get((req, res) => {
    //querying the database for a book that matches the bookID parameter from the URL request
   // Book.findById(req.params.bookId, (err, book) => {
     // res.json(book)
      // when using middleware
      res.json(req.book)
    //}) 
  })
  .put((req,res) => {
    //first retrieve the instance of the resource you want
    //update its values
    //Book.findById(req.params.bookId, (err, book) => {
      //  book.title = req.body.title;
        //book.author = req.body.author;
        //book.save()
        //res.json(book)
        
        // when using middleware
        req.book.title = req.body.title;
        req.book.author = req.body.author;
        req.book.save()
        res.json(req.book)
    
  })
  .delete((req,res)=>{
    Book.findById(req.params.bookId, (err, book) => {
        // with middleware
        //  req.book.remove(err => {
        book.remove(err => {
            if(err){
                res.status(500).send(err)
            }
            else{
                res.status(204).send('removed')
            }
        })
    })
  })
  

module.exports = bookRouter;