var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Category = require( '../models/category'),
    querystring = require('querystring');

mongoose.connect('mongodb://localhost:27017/myHabit', {useNewUrlParser: true})

router.get('/', function ( req, res ) {
  Category.find({}, function(err, category) {
    if (err) {
      throw err
    }
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
    res.send(category)
  })
})

router.get( '/:id', function ( req, res ) {
  Category.findOne({_id: req.params.id}, function(err, category){
    if (err) {
      res.send(err)
    }
    res.json(category)
  })
})

router.post( '/', function ( req, res ) {
  var data = req.body

  var category = new Category({
    name: data.name
  })

  category.save(function(err, category){
    if (err) {
      res.send(err)
    } 
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
    res.json({message: "create " + category.name, category: category})

  })
} )

router.patch('/:id', function( req, res ) {
  Category.findOne({_id: req.params.id}, function(err, category){
    if (err) {
      res.send(err)
    }
    category.name = req.body.name
    category.status = req.body.status
    category.save(function(err) {
      if (err) {
        res.send(err)
      }

      res.json({message: "Success updated"})
      
    })
  })
})

router.delete('/:id', function( req, res ) {
  Category.remove({_id: req.params.id}, function(err, results){
    if (err) {
      res.send(err)
    }
    res.json({message: "Success deleted"})
  })
})

module.exports = router;