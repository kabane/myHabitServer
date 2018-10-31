var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Todo = require( '../models/todo'),
    querystring = require('querystring');

mongoose.connect('mongodb://localhost:27017/myHabit', {useNewUrlParser: true})

router.get( ['/', '/todos'], function ( req, res ) {
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

router.get( '/todos/:id', function ( req, res ) {
  Todo.findOne({_id: req.params.id}, function(err, todo){
    if (err) {
      res.send(err)
    }
    res.json(todo)
  })
})

router.post( '/todos', function ( req, res ) {
  var data = req.body
  var todo = new Todo({
    name: data.name,
    status: 0,
    elapsed_time: 0,
    category_id: data.category_id
  });

  var categoryId = new mongoose.Types.ObjectId(data.categoryId)

  todo.save(function(err, todo){
    if (err) {
      res.header('Access-Control-Allow-Origin', '*')
      res.send(err)
    } else {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
      res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
      res.json({message: "create " + todo.name})
    }
  })
  
} )

router.patch('/todos/:id', function( req, res ) {
  Todo.findOne({_id: req.params.id}, function(err, todo){
    if (err) {
      res.send(err)
    }
    todo.name = req.body.name
    todo.status = req.body.status
    todo.elapsed_time = req.body.elapsed_time
    todo.category_id = req.body.category_id
    todo.save(function(err) {
      if (err) {
        res.send(err)
      }

      res.json({message: "Success updated"})
      
    })
  })
})

router.delete('/todos/:id', function( req, res ) {
  Todo.remove({_id: req.params.id}, function(err, results){
    if (err) {
      res.send(err)
    }
    res.json({message: "Success deleted"})
  })
})

module.exports = router;
