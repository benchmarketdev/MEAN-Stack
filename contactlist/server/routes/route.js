const express = require('express');
const router = express.Router();

const School = require('../models/schools');
const Schooldata = require('../models/schooldatas');


const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_helpers/db');
const User = db.User;


module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function authenticate({ email, password }) {
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, config.secret);
        return {
            ...userWithoutHash,
            token
        };
    }
}

async function getAll() {
    return await User.find().select('-hash');
}

async function getById(id) {
    return await User.findById(id).select('-hash');
}

async function create(userParam) {
    // validate
    if (await User.findOne({ fullName: userParam.fullName })) {
        throw 'fullName "' + userParam.fullName + '" is already taken';
    }

    const user = new User(userParam);

    // hash password
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // save user
    await user.save();
}

async function update(id, userParam) {
    const user = await User.findById(id);

    // validate
    if (!user) throw 'User not found';
    if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}










////retrieving schools
router.get('/schools',(req,res,next)=>{
    School.find(function(err,schools){
        res.json(schools);
    })
});
////retrieving schooldatas
router.get('/schooldatas',(req,res,next)=>{
    Schooldata.find(function(err,schooldatas){
        res.json(schooldatas);
    })
});

//add schooldata
router.post('/schooldata',(req,res,next)=>{
    let newSchooldata = new Schooldata({
        school_id: req.body.school_id,
        year: req.body.year,
        week: req.body.week,
        month: req.body.month,
        elect_eur: req.body.elect_eur,
        elect_kwh: req.body.elect_kwh,
        heating_eur: req.body.heating_eur,
        heating_kwh: req.body.heating_kwh,
        water_eur: req.body.water_eur,
        water_kwh: req.body.water_kwh 
    });

    newSchooldata.save((err,schooldata)=>{
        if(err)
        {
            res.json({msg:'Failed to add schooldata'});
        }
        else{
            res.json({msg:'Contact added successfully'});
        }
    });
});

//add school
router.post('/school',(req,res,next)=>{
    let newSchool = new School({
        schoolname: req.body.schoolname
    });

    newSchool.save((err,school)=>{
        if(err)
        {
            res.json({msg:'Failed to add school'});
        }
        else{
            res.json({msg:'Contact added successfully'});
        }
    });
});


//delete schooldata
router.delete('/schooldata/:id',(req,res,next)=>{
    Schooldata.remove({_id:req.params.id}, function(err,result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);;
        }
    });
});

//delete school
router.delete('/school/:id',(req,res,next)=>{
    School.remove({_id:req.params.id}, function(err,result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);;
        }
    });
});
module.exports =  router;