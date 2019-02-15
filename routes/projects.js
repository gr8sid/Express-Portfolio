let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the Projects db schema
let project = require('../models/favouriteThings');

/* GET contact list page - READ */
router.get('/', (req, res, next) => {

    project.find((err, projectList) => {
        
        if(err) {
            return console.error(err);
        }
        else {
            console.log(projectList);
            res.render('projects/index', {
                title: 'Projects List',
                projectList: projectList
            });
        }
    })
});





module.exports = router;