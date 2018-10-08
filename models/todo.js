var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    name: String,
    status: Number
});

module.exports = mongoose.model('Todo', TodoSchema);