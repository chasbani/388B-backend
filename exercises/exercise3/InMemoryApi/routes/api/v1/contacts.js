/* In this file you will define all the routes for your api.
You will need to define the following routes:
1) /api/v1/contacts
  This route will need to respond to 2 requests:
  1) GET: it will respond with the serialized form of all the
  contacts in your application and a response code of 200
  2) POST: it will respond to a POST request that will generate a 
  new instance of a contact and add it to the in memory collection
  and a response code 201 and a message saying "successfully added contact".
2) /api/v1/contacts/:id
  This route will need to responde to 4 requests:
  1) GET: it will respond with the serialized form of the requested
  resource and a response code of 200. You will receive the :id from 
  the req.params.id property. If the resource (contact) is not found in your "database",
  then you should respond with a http status code of 404 and a message saying
  "the resource was not found" as json.
  /api/v1/contacts?firstName=foo&lastName=bar
  2) GET: It will return all of the contacts that match the query paramaters
  you pass. If none of them match you should respond with an empty array. If more than
  one query parameter is passed, the resources that match need to match all of the 
  conditions, e.g. if you are passing values for both the firstName and lastName then
  your matches need to match both query parameters. Note: query params end at the end of the route,
  and all come after the ? character and are combined with a &.
  /api/v1/contacts/:id
  3) PUT: it will update the resource with the information attached in
  the req.body property.   
  Your route should respond with a 201 response code along with the updated
  resource otherwise 404 with an error message of "unable to update resource".
  4) DELETE: it will remove the contact from the collection with the matching id 
  in the request.params object and respond with a status code of 201 along with 
  the deleted resource in the response. If the resource is not found the route should
  respond with a 404 error and message "resource not found".  

  Hint: when sending your response you should follow the following examples:
  res.status(404).json({error: 'Contact not found'})  
  res.status(200).json(contacts)
  res.status(201).json(data)  
  */

let express = require('express');
let contactsRouter = express.Router();
const Contact = require('../../../models/contact');
let contacts = [];

/* Define your routes/endpoints here */

contactsRouter.get(/\\?/, function(req, res, next) {
  if(Object.keys(req.query).length == 0) {
    return next();
  }
  let temp = contacts.filter(e => {
    return Object.entries(req.query).reduce(((acc, q) => {
      return acc && (e[q[0]] == q[1]);
    }), true);
  })
    res.status(200).json(temp);
});

contactsRouter.get('/', function(req, res, next) {
  res.status(200).json(contacts);
});
contactsRouter.post('/', function(req, res, next) {
  let contact = new Contact(req.body["firstName"], req.body["lastName"], req.body["phoneNumber"], req.body["email"]);
  contacts[contact.id] = contact;
  res.status(201).json("successfully added contact");
});


contactsRouter.get('/:id', function(req, res, next) {
  let temp = contacts.filter(e => e.id == req.params.id);
  if(temp.length == 0) {
    res.status(404).json("the resource was not found");
  } else {
    res.status(200).json(temp);
  }
});

contactsRouter.put('/:id', function(req, res, next) {
  let temp = contacts.filter(e => e.id == req.params.id);
  if(temp.length == 0) {
    res.status(404).json({error: "unable to update resource"});
  } else {
    if(req.body["firstName"] != undefined) {
      contacts[req.params.id].firstName = req.body["firstName"];
    }
    if(req.body["lastName"] != undefined) {
      contacts[req.params.id].lastName = req.body["lastName"];
    }
    if(req.body["phoneNumber"] != undefined) {
      contacts[req.params.id].phoneNumber = req.body["phoneNumber"];
    }
    if(req.body["email"] != undefined) {
      contacts[req.params.id].email = req.body["email"];
    }
    res.status(201).json(contacts[req.params.id]);
  }

});
contactsRouter.delete('/:id', function(req, res, next) {
  let temp = contacts.filter(e => e.id == req.params.id);
  if(temp.length == 0) {
    res.status(404).json({error: "resource not found"});
  } else {
    let temp2;
     contacts = contacts.reduce(((acc, e) => {
      if(e.id == req.params.id) {
        temp2 = e;
        acc.push({id: -1});
      } else {
        acc.push(e);
      }
      return acc;
    }), []);
    res.status(201).json(temp2);
  }
});



module.exports = contactsRouter;