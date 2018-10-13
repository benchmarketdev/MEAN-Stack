
const mongoose = require('mongoose');

const SchoolSchema = mongoose.Schema({

    schoolname:{
        type:String,
        required:true
    }
});
const School = module.exports = mongoose.model('School',SchoolSchema);