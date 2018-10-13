const mongoose = require('mongoose');

const SchoolDataSchema = mongoose.Schema({

    school_id:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    week:{
        type:String,
        required:true
    },
    month:{
        type:String,
        required:true
    },
    elect_eur:{
        type:String,
        required:true
    },
    elect_kwh:{
        type:String,
        required:true
    },
    heating_eur:{
        type:String,
        required:true
    },
    heating_kwh:{
        type:String,
        required:true
    },
    water_eur:{
        type:String,
        required:true
    },
    water_kwh:{
        type:String,
        required:true
    }
});
const SchoolData = module.exports = mongoose.model('SchoolData',SchoolDataSchema);