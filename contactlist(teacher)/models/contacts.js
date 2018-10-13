const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true,
    },
    first_name:{
        type: String,
        require: true
    },
    last_name:{
        type: String,
        require: true
    },
    phone:{
        type: String,
        require: true
    },
});

const Contact = module.exports = mongoose.model('Contact', ContactSchema);