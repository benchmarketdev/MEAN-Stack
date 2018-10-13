const express = require('express');
const router = express.Router();

const Contact = require("../models/contacts");

// Retrieving contacts
router.get('/contacts', (req, res, next)=>{
    Contact.find(function(err, contacts){
        res.json(contacts);
    });
});

// Add Contact
router.post('/contact', (req, res, next)=>{
    let newContact = new Contact({
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
    });

    newContact.save((err, contact) =>{
        if(err){
            res.json({msg: 'Failed to add contact'});
        } else {
            res.json({msg: 'contact added successfully'});
        }
    });
});

router.post('/login', (req, res, next)=>{
    let newContact = new Contact({
        email: req.body.email,
        password: req.body.password,
    });

    res.json({user: newContact});
});

// Delete Contact
router.delete('/contact/:id', (req, res, next)=>{
    Contact.remove({_id: req.params.id}, (err, result)=>{
        if(err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;