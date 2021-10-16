const model = require('../models/event');

//get request / stories: send all stories to the user
exports.index = (req,res)=>{
    let events = model.find();
    res.render('./event/index', {events});
    //TODO
    // let events = model.find();
    // let eventCat = model.myCat();
    // res.render('./event/index', {events, eventCat});
};

//get /events/new: send html form for creating a new event
exports.new = (req,res) =>{
    res.render('./event/new');
};

//POST /events: create a new event
exports.create = (req, res)=>{
    // res.send('Created a new event');
    console.log(req.body);
    let event = req.body;
    model.save(event);
    console.log(event);
    res.redirect('/events');
};

//get /events/:id: send details of event identitifed by id
exports.show = (req,res, next) =>{
    let id = req.params.id;
    let event = model.findByid(id);
    if(event){
        // res.send(event);
        res.render('./event/show', {event});
    }
    else{
        let err = new Error('Cannot find a event with id '+ id);
        err.status = 404;
        next(err);    
    }
};

//get /events/:id/edit: send HTML form for editiing ann existing event
exports.edit = (req,res, next) =>{
    let id = req.params.id;
    let event = model.findByid(id);
    if(event){
        // res.send(event);
        res.render('./event/edit', {event});
    }
    else{
        let err = new Error('Cannot find a event with id '+ id);
        err.status = 404;
        next(err);
    }
};

//get /events/:id: update the event identitifed by id
exports.update= (req,res, next) =>{
    // res.send('update event with id ' + req.params.id);
    let event = req.body;
    let id = req.params.id;
    
    if (model.updateById(id, event)){
        res.redirect('/events/' +id);
    }
    else{
        let err = new Error('Cannot find a event with id '+ id);
        err.status = 404;
        next(err);    
    }
};

//get /events/:id: delete the event identitifed by id
exports.delete = (req,res, next) =>{
    // res.send('delete event with id ' + req.params.id);
    let id = req.params.id;
  if(model.deleteById(id)){
      res.redirect('/events');
  }
  else{
    let err = new Error('Cannot find a story with id '+ id);
    err.status = 404;
    next(err);  }
};
