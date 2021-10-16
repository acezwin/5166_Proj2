//main purpose to routing based on the path in the url, it will follow the proper control function passed into the storycontroller.js
const express = require('express');
const router = express.Router();

//import controller into routes
const controller = require('../controllers/eventController');
// const mainController = require('../controllers/mainController');

//get request / stories: send all stories to the user
router.get('/', controller.index);

//get /stories/new: send html form for creating a new story
router.get('/new', controller.new);

//POST /stories: create a new story
router.post('/', controller.create);

//get /stories/:id: send details of story identitifed by id
router.get('/:id', controller.show);

//get /stories/:id/edit: send HTML form for editiing ann existing story
router.get('/:id/edit', controller.edit);

//get /stories/:id: update the story identitifed by id
router.put('/:id', controller.update);

//get /stories/:id: delete the story identitifed by id
router.delete('/:id', controller.delete);



//GET
module.exports = router;