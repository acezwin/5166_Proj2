//main purpose to routing based on the path in the url, it will follow the proper control function passed into the storycontroller.js
const express = require('express');
const router = express.Router();

//import controller into routes
const mainController = require('../controllers/mainController');
// const mainController = require('../controllers/mainController');

//get request / stories: send all stories to the user
router.get('/home', mainController.index);
router.get('/about', mainController.about);
router.get('/contact', mainController.contact);

//GET
module.exports = router;