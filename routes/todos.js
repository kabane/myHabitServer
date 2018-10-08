var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Todo = require( '../models/todo'),
    querystring = require('querystring')

mongoose.connect('mongodb://localhost:27017/myHabit', {useNewUrlParser: true})

router.get( ['/', '/todo'], function ( req, res ) {
  Todo.find({}, function(err, todo) {
    if (err) {
      throw err;
    }
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
    res.send(todo)
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
  var data = req.body
console.log(data)
  var todo = new Todo({
    name: data.name,
    status: 0
  })
console.log(todo)
  todo.save(function(err, todo){
    if (err) {
      res.send(err)
    } 
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
    res.json({message: "create " + todo.name})

  })
} )

router.patch('/todo/:id', function( req, res ) {
  Todo.findOne({_id: req.params.id}, function(err, todo){
    if (err) {
      res.send(err)
    }
    todo.name = req.body.name
    todo.status = req.body.status
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
