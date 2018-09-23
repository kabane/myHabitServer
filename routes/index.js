var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myHabit', {useNewUrlParser: true})
var Todo = require( '../models/todo')

router.get( ['/', '/todo'], function ( req, res ) {
  Todo.find({}, function(err, todo) {
    if (err) {
      throw err;
    } else {
      res.send(todo);
    }
  });
});

router.get( '/todo/:id', function ( req, res ) {
  Todo.findOne({_id: req.params.id}, function(err, todo){
    if (err) {
      res.send(err)
    }
    res.json(todo)
  });
});

router.post( '/todo', function ( req, res ) {
  var data = req.body;
  var todo = new model.Todo({
    _id: req.body._id,
    name: req.body.name
  })

  todo.save(function(err){
    if (err) {
      res.send(err)
    }
    res.json({message: "create " + todo.text})
  })
} );

module.exports = router;
