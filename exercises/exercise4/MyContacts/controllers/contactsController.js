const Contact = require('../models/contact');

exports.getContactList = function (req, res) {
  Contact.find(req.query, (err, contacts) => {
    if(err) {
    	res.status(500).send("Error getting contact list");
    } else {
    	res.status(200).json(contacts);
    }
  })
};

exports.createContact = function (req, res) {
	let contact = new Contact(req.body);
	contact.save(err => {
    if(err) {
    	res.status(500).send("Error creating contact");
    } else {
      res.status(201).json("successfully added contact");
    }
  })

};


exports.getContact = function (req, res) {
  Contact.findById(req.params.id, (err, contact) => {
    if(err || contact == null) {
    	res.status(404).send("resource not found");
    } else {
    	res.status(200).json(contact);
    }
  })
};

exports.updateContact = function (req, res) {
  Contact.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, function (err, result) {
    if (err || result == null) {
    	res.status(404).send("unable to update resource");
    } else {
        res.status(201).send(result);
    }
  });
};

exports.deleteContact = function (req, res) {
  Contact.findById(req.params.id, (err, contact) => {
    if(err || contact == null) {
      res.status(404).send("resource not found");
    } else {
      temp = contact;
      contact.remove(err => {
        if (err) {
          res.status(500).send("Error deleting contact");
        } else {
          res.status(201).send(temp);
       }
    })
    }
  })
};