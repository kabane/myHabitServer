var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Todo = require( '../models/todo')
mongoose.connect('mongodb://localhost:27017/myHabit', {useNewUrlParser: true})

router.get( ['/', '/todo'], function ( req, res ) {
  Todo.find({}, function(err, todo) {
    if (err) {
      throw err;
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
      res.send(todo);
    }
  })
})

router.get( '/todo/:id', function ( req, res ) {
  Todo.findOne({_id: req.params.id}, function(err, todo){
    if (err) {
      res.send(err)
    }
    res.json(todo)
  })
})

router.post( '/todo', function ( req, res ) {
  var data = req.body;
  var todo = new Todo({
    text: data.text
  })

  todo.save(function(err){
    if (err) {
      res.send(err)
    }
    res.json({message: "create " + todo.text})
  })
} )

router.patch('/todo/:id', function( req, res ) {
  Todo.findOne({_id: req.params.id}, function(err, todo){
    if (err) {
      res.send(err)
    }
    todo.text = req.body.text
    todo.save(function(err) {
      if (err) {
        res.send(err)
      }

      res.json({message: "Success updated"})
    })
  })
})

router.delete('/todo/:id', function( req, res ) {
  Todo.remove({_id: req.params.id}, function(err, results){
    if (err) {
      res.send(err)
    }
    res.json({message: "Success deleted"})
  })
})

module.exports = router;
