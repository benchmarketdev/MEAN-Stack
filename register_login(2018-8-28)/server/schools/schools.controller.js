const express = require('express');
const router = express.Router();
// const schoolService = require('./school.service');
const School = require('../_helpers_schools/db');


// router.get('/', getAll);
router.get('/',(req,res,next)=>{
  

    School.find(function(err,schools){
        res.json(schools);
    })
});

router.post('/schools',(req,res,next)=>{
    let newSchool = new School({
        name: req.body.name,
    });

    newSchool.save((err,school)=>{
        if(err)
        {
            res.json({msg:'Failed to add contact'});
        }
        else{
            res.json({msg:'Contact added successfully'});
        }
    });
});

module.exports = router;

